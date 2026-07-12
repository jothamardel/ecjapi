'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';

// Extend window interface for Paystack Pop
declare global {
  interface Window {
    PaystackPop: any;
  }
}

const PRESET_AMOUNTS = [2000, 5000, 10000, 25000, 50000];

export default function DonateForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState<number | string>(5000);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [cause, setCause] = useState('General Support');
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'verifying' | 'success' | 'failed'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [transactionData, setTransactionData] = useState<{
    reference: string;
    amount: number;
    paidAt: string;
  } | null>(null);

  // Fallback public key for demonstration/sandbox testing
  const paystackPublicKey =
    process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ||
    'pk_test_3c1782ea36f7344ee4ad7c1a8e63e26bbbb0a16c';

  const isSandbox = !process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  // Sync amount when switching between presets and custom
  const handlePresetSelect = (value: number) => {
    setIsCustom(false);
    setAmount(value);
    setErrorMessage('');
  };

  const handleCustomSelect = () => {
    setIsCustom(true);
    setAmount(customAmount ? Number(customAmount) : '');
    setErrorMessage('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    if (val === '') {
      setAmount('');
    } else {
      setAmount(Number(val));
    }
    setErrorMessage('');
  };

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const donationAmount = Number(amount);
    if (!donationAmount || donationAmount < 100) {
      setErrorMessage('The minimum donation amount is ₦100.');
      return;
    }

    if (!scriptLoaded || !window.PaystackPop) {
      setErrorMessage('Paystack payment system is currently loading. Please try again in a few seconds.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const paystack = new window.PaystackPop();
      paystack.newTransaction({
        key: paystackPublicKey,
        email: email,
        amount: donationAmount * 100, // Convert to kobo
        currency: 'NGN',
        metadata: {
          custom_fields: [
            {
              display_name: 'Donor Name',
              variable_name: 'donor_name',
              value: name,
            },
            {
              display_name: 'Donation Program',
              variable_name: 'donation_program',
              value: cause,
            },
          ],
        },
        onSuccess: async (transaction: any) => {
          setPaymentStatus('verifying');
          try {
            const verifyRes = await fetch(`/api/donate/verify?reference=${encodeURIComponent(transaction.reference)}`);
            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              setTransactionData({
                reference: verifyData.data.reference,
                amount: verifyData.data.amount,
                paidAt: verifyData.data.paidAt,
              });
              setPaymentStatus('success');
            } else {
              setErrorMessage(verifyData.message || 'Payment verification failed. Please contact support.');
              setPaymentStatus('failed');
            }
          } catch (err) {
            console.error('Error verifying payment:', err);
            setErrorMessage('Payment went through, but we encountered an issue verifying it. Please save your reference: ' + transaction.reference);
            setPaymentStatus('failed');
          } finally {
            setLoading(false);
          }
        },
        onCancel: () => {
          setLoading(false);
          setPaymentStatus('idle');
        },
      });
    } catch (err) {
      console.error('Error starting Paystack popup:', err);
      setErrorMessage('An unexpected error occurred. Please try again.');
      setLoading(false);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setAmount(5000);
    setCustomAmount('');
    setIsCustom(false);
    setCause('General Support');
    setPaymentStatus('idle');
    setTransactionData(null);
    setErrorMessage('');
  };

  if (paymentStatus === 'success' && transactionData) {
    return (
      <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-xl border border-green-50/50 text-center animate-fade-in">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 shadow-inner">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="h3 font-cabinet-grotesk text-gray-900 mb-2">Thank You, {name}!</h2>
        <p className="text-gray-600 mb-6">
          Your donation of <span className="font-bold text-gray-900">₦{transactionData.amount.toLocaleString()}</span> towards <span className="font-medium text-gray-900">{cause}</span> has been processed successfully.
        </p>

        <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-left text-sm text-gray-500 mb-8 space-y-2">
          <div>
            <span className="font-semibold block text-xs text-gray-400 uppercase tracking-wider">Transaction Reference</span>
            <code className="text-gray-700 font-mono select-all text-xs">{transactionData.reference}</code>
          </div>
          <div className="flex justify-between text-xs pt-1 border-t border-gray-200/50">
            <span>Date: {new Date(transactionData.paidAt).toLocaleDateString()}</span>
            <span>Currency: NGN</span>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={resetForm}
            className="w-full btn text-white bg-blue-500 hover:bg-blue-600 py-3 rounded-xl transition-all duration-200"
          >
            Make Another Donation
          </button>
          <a
            href="/"
            className="block w-full text-center text-sm font-medium text-blue-500 hover:text-blue-600 py-2"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'verifying') {
    return (
      <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center py-16">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-blue-50"></div>
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        </div>
        <h2 className="h3 font-cabinet-grotesk text-gray-900 mb-2">Verifying Payment...</h2>
        <p className="text-gray-600">
          We are confirming your transaction status with Paystack. Please do not close this window or refresh the page.
        </p>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://js.paystack.co/v2/inline.js"
        onLoad={() => setScriptLoaded(true)}
        onError={() => setErrorMessage('Failed to load Paystack payment system. Please check your internet connection.')}
      />

      <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition-all duration-300">
        {isSandbox && (
          <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 text-left flex items-start gap-2.5">
            <svg className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <span className="font-semibold block mb-0.5">Development Sandbox Mode</span>
              Real money will not be charged. Set `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` in environment variables for production.
            </div>
          </div>
        )}

        {errorMessage && (
          <div className="mb-6 p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-sm text-rose-800 text-left flex items-start gap-2.5">
            <svg className="w-5 h-5 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>{errorMessage}</div>
          </div>
        )}

        <form onSubmit={handleDonate} className="space-y-6 text-left">
          {/* Donation Cause */}
          <div>
            <label htmlFor="cause" className="block text-sm font-semibold text-gray-700 mb-2">
              Select Cause/Program
            </label>
            <select
              id="cause"
              value={cause}
              onChange={(e) => setCause(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-150 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.67%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:20px] bg-[right_16px_center] bg-no-repeat text-gray-800"
            >
              <option value="General Support">General Support</option>
              <option value="Padded Girl Program">Padded Girl Program</option>
              <option value="Girl-Child Education">Girl-Child Education</option>
              <option value="Juvenile Abuse Prevention">Juvenile Abuse Prevention</option>
            </select>
          </div>

          {/* Amount Options */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Donation Amount
            </label>
            <div className="grid grid-cols-3 gap-2.5 mb-3">
              {PRESET_AMOUNTS.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => handlePresetSelect(val)}
                  className={`py-3 px-1 rounded-xl text-sm font-bold border transition-all duration-200 transform active:scale-98 ${
                    !isCustom && amount === val
                      ? 'bg-blue-50 border-blue-500 text-blue-600 shadow-sm scale-102 font-extrabold'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  ₦{val.toLocaleString()}
                </button>
              ))}
              <button
                type="button"
                onClick={handleCustomSelect}
                className={`py-3 px-1 rounded-xl text-sm font-bold border transition-all duration-200 transform active:scale-98 ${
                  isCustom
                    ? 'bg-blue-50 border-blue-500 text-blue-600 shadow-sm scale-102 font-extrabold'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                Custom
              </button>
            </div>

            {/* Custom Amount Input Field */}
            {isCustom && (
              <div className="relative mt-3 rounded-xl shadow-sm animate-slide-down">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-500 font-bold text-sm">₦</span>
                </div>
                <input
                  type="number"
                  name="custom_amount"
                  id="custom_amount"
                  min="100"
                  placeholder="Enter amount (min. 100)"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 text-gray-800 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-150"
                  required={isCustom}
                />
              </div>
            )}
          </div>

          {/* User Details */}
          <div className="space-y-4">
            <div>
              <label htmlFor="full-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                autoComplete="name"
                placeholder="e.g. Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-150"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="e.g. jane.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-150"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading || !scriptLoaded}
              className={`w-full py-4 text-white bg-blue-500 hover:bg-blue-600 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg ${
                loading ? 'opacity-85 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Processing...
                </>
              ) : (
                `Donate ₦${amount ? Number(amount).toLocaleString() : '0'}`
              )}
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center mt-3">
            Secure 256-bit SSL encrypted payments processed by Paystack.
          </p>
        </form>
      </div>
    </>
  );
}

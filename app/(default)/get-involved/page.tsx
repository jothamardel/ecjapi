export const metadata = {
  title: 'Get Involved - EmpowHer Choices',
  description: 'Volunteer or partner with us to make a difference.',
}

export default function GetInvolved() {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <h1 className="h1 font-cabinet-grotesk mb-4">Get Involved</h1>
          <p className="text-xl text-gray-500">
            Join our mission to empower the girl-child. Volunteer, partner, or sponsor our programs today.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="first_name">First Name <span className="text-red-500">*</span></label>
                <input id="first_name" type="text" className="form-input w-full" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="last_name">Last Name <span className="text-red-500">*</span></label>
                <input id="last_name" type="text" className="form-input w-full" required />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-500">*</span></label>
                <input id="email" type="email" className="form-input w-full peer invalid:border-red-500" required />
                <p className="invisible peer-invalid:visible text-red-500 text-xs mt-1">Please enter a valid email address.</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" className="form-input w-full" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
              <input id="address" type="text" className="form-input w-full mb-2" placeholder="Street" />
              <div className="grid grid-cols-2 gap-4 mb-2">
                <input type="text" className="form-input w-full" placeholder="City" />
                <input type="text" className="form-input w-full" placeholder="State/Province" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" className="form-input w-full" placeholder="Zip/Postal Code" />
                <input type="text" className="form-input w-full" placeholder="Country" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="gender">Gender</label>
              <select id="gender" className="form-select w-full">
                <option>Select...</option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="description">How would you like to be involved? <span className="text-red-500">*</span></label>
              <textarea id="description" className="form-textarea w-full" rows={4} required></textarea>
            </div>
            
            <div>
              <button type="submit" className="btn text-white bg-blue-500 hover:bg-blue-600 w-full">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

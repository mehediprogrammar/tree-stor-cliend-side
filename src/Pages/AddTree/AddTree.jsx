const AddTree = () => {

    const hanldeAddTree = e =>{
        e.preventDefault()
        const form = e.target
        const Name = form.name.value;
        const  chef = form.chef.value;
        const Supplier = form.supplier.value;
        const Taste = form.taste.value;
        const Category = form.category.value;
        const Details = form.details.value;
        const Phone = form.phone.value;
       const AllDetails = {Name, chef, Supplier, Taste, Category, Details, Phone, AllDetails}
       console.log(AllDetails)


    }


  return (
    <div className="bg-[#F4F3F0] px-full py-10 my-10">
      
        <h1 className="text-center text-[#374151] text-3xl mt-10  font-normal">
          Add New Tree
        </h1>
        <p className="text-center px-5">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      
      <form onSubmit={hanldeAddTree}>
        {/* step-1 */}
        <div className="flex my-6 ">
            {/* form name  */}
          <div className="form-control md:w-1/2 px-4 ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
           
              <input
                type="text"
                placeholder="your Tree"
                className="input input-bordered  w-full"
              />
            </label>
          </div>
          {/* Chef */}
          <div className="form-control md:w-1/2 px-4">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <label className="input-group">
           
              <input
                type="text"
                placeholder="Enter your Chef"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

          {/* step-2 */}

        <div className="flex my-4 ">
            {/* Supplier */}
          <div className="form-control md:w-1/2 px-4 ">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
           
              <input
                type="text"
                placeholder="Enter your Supplier"
                className="input input-bordered  w-full"
              />
            </label>
          </div>
          {/* Taste*/}
          <div className="form-control md:w-1/2 px-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
           
              <input
                type="text"
                placeholder="Enter your Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

     {/* step-3 */}

     <div className="flex my-4 ">
            {/* Category*/}
          <div className="form-control md:w-1/2 px-4 ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
           
              <input
                type="text"
                placeholder="Enter your Category"
                className="input input-bordered  w-full"
              />
            </label>
          </div>
          {/* Details*/}
          <div className="form-control md:w-1/2 px-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
           
              <input
                type="text"
                placeholder="Enter your Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* step-4 */}
        {/* phone*/}
        <div className="form-control w-full px-4">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <label className="input-group">
           
              <input
                type="text"
                placeholder="Enter your phone"
                className="input input-bordered w-full"
              />
            </label>
          </div>
           {/* step-5 */}
         <div className="px-4 my-4">
         <button className="btn btn-block bg-[#D2B48C] px-4">Add Tree</button>
         </div>
      </form>
    </div>
  );
};

export default AddTree;

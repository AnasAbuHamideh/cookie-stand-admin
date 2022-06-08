import React, {useState} from 'react'



function Form() {
    const [storedValues, setStored] = useState('')
          
         const TableHandler = (e)=> {
            e.preventDefault();
            let values= {
            location: e.target.Loc.value,
            min: e.target.MinCustomer.value,
            max: e.target.MaxCustomer.value,
            avg: e.target.average.value,
          }
          setStored(values) 
        }
        
  return (
      <>
      <form onSubmit={TableHandler}  className="flex flex-col w-4/5 gap-5 p-4 m-auto bg-green-400 rounded-lg place-items-center ">
          <h1 className="p-4 text-black ">Create Cookie Stand</h1>
          <div className="items-stretch w-full">
              <label>Location:</label>
              <input type='text' name="Loc" className="flex-auto pl-2" placeholder='Barcelona'></input>
              <br />
          </div>
          <div className="flex gap-3 place-items-center ">
              <div className='bg-green-200 rounded-lg '>
                  <label className="content-center mx-7">
                      Minimum Customers per Hour :{" "}
                  </label>
                  <input
                      name='MinCustomer'
                      placeholder="2"
                      type="number"
                      className="w-4/5 m-2 "
                      min='0'
                  ></input>
                  <br />
              </div>
              <div className='bg-green-200 rounded-lg '>
                  <label className="content-center mx-7">
                      Maximum Customers per Hour :{" "}
                  </label>
                  <input
                      name='MaxCustomer'
                      placeholder="4"
                      type="number"
                      className="w-4/5 m-2"
                      min='0'
                  ></input>
                  <br />
              </div>
              <div className='bg-green-200 rounded-lg '>
                  <label className="content-center mx-7">
                      Average Cookie per Sale :{" "}
                  </label>
                  <input
                      name='average'
                      placeholder="2.5"
                      type="number"
                      className="w-4/5 m-2 "
                      min='0'
                  ></input>
                  <br />
              </div>
              <button className="w-1/5 p-4 bg-green-600 rounded-lg" type='submit' > Create</button>
          </div>
      </form>

      <section className="text=center p-10">
      <p className='m-5 text-gray-600'>Report Table coming soon ......</p>
       <p className="m-3">{JSON.stringify(storedValues)}</p>
       </section>
       </>
  )
}

export default Form
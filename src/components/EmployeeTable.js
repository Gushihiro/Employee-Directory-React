import React, { useState, useEffect } from 'react'
import EmployeeCard from './EmployeeCard';
import API from '../utils/API';
import SortButton from './SortButton';
import FilterButton from './FilterButton';

export default function EmployeeTable() {

    const [employees, setEmployees] = useState([])
    const [sort, setSort] = useState(false);
    const [filter, setFilter] = useState("");


    const sortButtonClick = () => {
      setSort(!sort);
      sortByName(sort);
    }
    
    const sortByName = (sortDirection) => {
      let stateCopy = employees;
      if (sortDirection) {
        stateCopy.sort((a,b) => {
              let fa = a.name.first.toLowerCase(),
                  fb = b.name.first.toLowerCase();
            
    
              if (fa < fb) {
                  return -1;
              }
              if (fa > fb) {
                  return 1;
              }
              return 0;
        })
      } else {
          stateCopy.sort((a,b) => {
              let fa = a.name.first.toLowerCase(),
                  fb = b.name.first.toLowerCase();
    
              if (fa < fb) {
                  return 1;
              }
              if (fa > fb) {
                  return -1;
              }
              return 0;
          })
      }
      setEmployees(stateCopy);
      
    }  
    //filter is an input(w/ a handleInputChange), not a button, duhhhh
    const filterFunction = () => {
      let filteredArray = employees;
      const filtered = filteredArray.filter(employee=>employee.gender === "male")
      setEmployees(filtered)
    }
      useEffect(() => {
        API.getEmployee().then((res) => {
          setEmployees(res.data.results);
          console.log(employees);
        })
        .catch((err) => console.log(err));
      }, []);

    return (
        <div>
          <h1 className="text-center">Employee Directory</h1>
            <table className="d-flex flex-column justify-content-center mx-auto">
              <SortButton 
                handleSort={sortButtonClick}
              />
              <FilterButton
                handleInputChange={filterFunction}
              />
                {employees ? employees.map(employee =>
                  <tr>
                    <EmployeeCard 
                      key = { employee.cell }
                      name = { `${employee.name.first} ${employee.name.last}`}
                      image = { employee.picture.medium }
                      email = { employee.email }
                      gender = { employee.gender }
                    />
                  </tr>
                ) : <div />
                }
              
            </table>
        </div>
    )
}


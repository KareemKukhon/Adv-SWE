const pool = require("../../config/database");
module.exports = {
  
    create: (data, callBack) => {
      isExist = false;
      pool.query(
        `Select * From employers Where Email = ?`,
    [data.email],
    (error, result, fields)=>{
        if(error){
            return callBack(error);
        }
        if(result.length > 0){
          console.log(result)
          return callBack("This user is already exist")
        }
        else{
          pool.query(
            `insert into employers(Name, email, Company) 
                    values(?,?,?)`,
        [
            data.name,
            data.email,
            data.Company
        ],
        (error, result1, fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, result1);
        }
        );
        }
    }
    )

    },
    getAll: (callBack) => {
        pool.query(
          `SELECT * FROM employers`,
          (error, result, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, result);
          }
        );
      },
    getById: (id,callBack) => {
        pool.query(
          `SELECT * FROM employers WHERE ID = ?`,
          [id],
          (error, result, fields) => {
            if (error) {
              return callBack(error);
            }
            if(result.length>0)
              return callBack(null, result);
            else{
              return callBack("User Not Found");
            }
          }
        );
      },
      createJob: (data, callBack) => {
        pool.query(
            `insert into joblistings(jobTitle, jobDescription, Requirements, minSalary, maxSalary, Employer) 
                    values(?,?,?,?,?,?)`,
        [
            data.JobTitle,
            data.JobDescription,
            data.Requirements,
            data.minSalary,
            data.maxSalary,
            data.Employer,
        ],
        (error, result, fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, result);
        }
        )
    },
    getJob: (callBack) => {
      pool.query(
        `SELECT * FROM joblistings`,
        (error, result, fields) => {
          if (error) {
            return callBack(error);
          }
          return callBack(null, result);
        }
      );
    },
    getJobById: (id,callBack) => {
      pool.query(
        `SELECT * FROM joblistings WHERE ID = ?`,
        [id],
        (error, result, fields) => {
          if (error) {
            return callBack(error);
          }
          if(result.length > 0)
          return callBack(null, result);
          else
          return callBack("Job Not Found");
        }
      );
    },
    getJobByEmployer: (Employer,callBack) => {
      pool.query(
        `SELECT * FROM joblistings WHERE Employer = ?`,
        [Employer],
        (error, result, fields) => {
          if (error) {
            return callBack(error);
          }
          if(result.length > 0)
          return callBack(null, result);
          else
          return callBack("No Job Found");
        }
      );
    },
}
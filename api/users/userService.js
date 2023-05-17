const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into employers(Name, email, Company) 
                    values(?,?,?)`,
        [
            data.name,
            data.email,
            data.Company
        ],
        (error, result, fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, result);
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
            return callBack(null, result);
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
}
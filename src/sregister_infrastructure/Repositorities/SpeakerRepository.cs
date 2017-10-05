﻿using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using sregister_core.Interfaces;
using sregister_core.Models;
using Microsoft.Extensions.Options;
using System.ComponentModel.DataAnnotations;

namespace sregister_infrastructure.Repositorities
{
    public class SpeakerRepository : ISpeakerRepository
    {
        private string dbConnStr;

        public SpeakerRepository(IOptions<SpeakerRegisterOptions> options)
        {
            dbConnStr = options.Value.SRegisterDB;
        }

        public IEnumerable<Speaker> GetSpeakers()
        {
            IEnumerable<Speaker> speakerList;

            using (IDbConnection db = new SqlConnection(dbConnStr))
            {
                speakerList =
                    db.Query<Speaker>("GetSpeakers", null, null, false, 60, CommandType.StoredProcedure).AsList();

            }
            return speakerList;
        }

        public Speaker LoadSpeaker(int id)
        {
            Speaker speaker;

            using (
                IDbConnection db = new SqlConnection(dbConnStr))
            {
                var mParams = new DynamicParameters();
                mParams.Add("Id", id, DbType.Int32, ParameterDirection.Input);

                speaker = db.Query<Speaker>("LoadSpeaker", mParams, null, false, 60,
                    CommandType.StoredProcedure).FirstOrDefault();

            }

            return speaker;
        }

        public Speaker SaveSpeaker(Speaker currentSpeaker)
        {
            Speaker speaker;

            if (Validator.TryValidateObject(
                currentSpeaker,
                new ValidationContext(currentSpeaker, null, null),
                currentSpeaker.validationResults,
                false))
            {
                try
                {
                    using (IDbConnection db = new SqlConnection(dbConnStr))
                    {
                        var mParams = new DynamicParameters();
                        mParams.Add("Id", currentSpeaker.Id, DbType.Int32, ParameterDirection.Input);
                        mParams.Add("FirstName", currentSpeaker.FirstName, DbType.String, ParameterDirection.Input);
                        mParams.Add("LastName", currentSpeaker.LastName, DbType.String, ParameterDirection.Input);
                        mParams.Add("Address1", currentSpeaker.Address1, DbType.String, ParameterDirection.Input);
                        mParams.Add("Address2", currentSpeaker.Address2, DbType.String, ParameterDirection.Input);
                        mParams.Add("City", currentSpeaker.City, DbType.String, ParameterDirection.Input);
                        mParams.Add("State", currentSpeaker.State, DbType.String, ParameterDirection.Input);
                        mParams.Add("Zipcode", currentSpeaker.Zipcode, DbType.String, ParameterDirection.Input);
                        mParams.Add("EmailAddress", currentSpeaker.EmailAddress, DbType.String, ParameterDirection.Input);
                        mParams.Add("PhoneNumber", currentSpeaker.PhoneNumber, DbType.String, ParameterDirection.Input);

                        speaker = db.Query<Speaker>("SaveSpeaker", mParams, null, false, 60,
                            CommandType.StoredProcedure).FirstOrDefault();
                    }
                }
                catch
                {
                    speaker = currentSpeaker;
                }
            }
            else
            {
                speaker = currentSpeaker;
            }

            return speaker;
        }

        public bool DeleteSpeaker(int id)
        {
            int numOfChangedRows;

            using (
                IDbConnection db = new SqlConnection(dbConnStr))
            {
                var mParams = new DynamicParameters();
                mParams.Add("Id", id, DbType.Int32, ParameterDirection.Input);

                numOfChangedRows = db.Execute("DeleteSpeaker", mParams, null, 60, CommandType.StoredProcedure);
            }

            if (numOfChangedRows == 1)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

    }
}

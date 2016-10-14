using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using sregister_webapi.Interfaces;
using sregister_webapi.Models;

namespace sregister_webapi.Repositorities
{
    public class ConferenceRepository : IConferenceRepository
    {
        private string dbConnStr =
            "Data Source=RTWORKLAPTOP\\DEVDBLOCAL;Initial Catalog=SRegisterDB;Integrated Security=True;Persist Security Info=False;Pooling=False;MultipleActiveResultSets=False;Connect Timeout=60;Encrypt=False;TrustServerCertificate=True";

        public IEnumerable<Conference> GetConferences()
        {
            IEnumerable<Conference> conferenceList;

            using (IDbConnection db = new SqlConnection(dbConnStr))
            {
                conferenceList =
                    db.Query<Conference>("GetConferences", null, null, false, 60, CommandType.StoredProcedure).AsList();

            }
            return conferenceList;
        }

        public Conference LoadConference(int id)
        {
            Conference conference;

            using (IDbConnection db = new SqlConnection(dbConnStr))
            {
                var mParams = new DynamicParameters();
                mParams.Add("Id", id, DbType.Int32, ParameterDirection.Input);

                conference = db.Query<Conference>("LoadConference", mParams, null, false, 60,
                    CommandType.StoredProcedure).FirstOrDefault();

            }

            return conference;
        }

        public Conference SaveConference(Conference currentConference)
        {
            Conference conference;

            using (
               IDbConnection db = new SqlConnection(dbConnStr))
            {
                var mParams = new DynamicParameters();
                mParams.Add("Id", currentConference.Id, DbType.Int32, ParameterDirection.Input);
                mParams.Add("Name", currentConference.Name, DbType.String, ParameterDirection.Input);
                mParams.Add("Location", currentConference.Location, DbType.String, ParameterDirection.Input);
                mParams.Add("StartDate", currentConference.StartDate, DbType.DateTime, ParameterDirection.Input);
                mParams.Add("EndDate", currentConference.EndDate, DbType.String, ParameterDirection.Input);
                mParams.Add("City", currentConference.City, DbType.String, ParameterDirection.Input);
                mParams.Add("State", currentConference.State, DbType.String, ParameterDirection.Input);

                conference = db.Query<Conference>("SaveConference", mParams, null, false, 60,
                    CommandType.StoredProcedure).FirstOrDefault();

            }

            return conference;
        }

        public bool DeleteConference(int id)
        {
            int numOfChangedRows;

            using (IDbConnection db = new SqlConnection(dbConnStr))
            {
                var mParams = new DynamicParameters();
                mParams.Add("Id", id, DbType.Int32, ParameterDirection.Input);

                numOfChangedRows = db.Execute("DeleteConference", mParams, null, 60, CommandType.StoredProcedure);
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

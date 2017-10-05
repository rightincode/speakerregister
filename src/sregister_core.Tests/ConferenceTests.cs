using Microsoft.VisualStudio.TestTools.UnitTesting;
using sregister_core.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Linq;

namespace sregister_core.Tests
{
    [TestClass]
    public class ConferenceTests
    {
        [TestMethod]
        public void ConferenceNameMissing()
        {
            var testConference = new Conference()
            {
                Name = "",
                Location = "Main Campus",
                StartDate = new DateTime(2017, 01, 01),
                EndDate = new DateTime(2017, 01, 07),
                City = "Huntersville",
                State = "NC",
                Id = 1
            };

            bool validateAllProperties = false;

            Validator.TryValidateObject(testConference,
                new ValidationContext(testConference, null, null),
                testConference.ValidationResults,
                validateAllProperties);

            Assert.AreEqual(1, testConference.ValidationResults.Where((result) => result.MemberNames.Contains("Name")).Count(), "Conference name should be missing.");
        }

        [TestMethod]
        public void ConferenceLocationMissing()
        {
            var testConference = new Conference()
            {
                Name = "Test Conference",
                Location = "",
                StartDate = new DateTime(2017, 01, 01),
                EndDate = new DateTime(2017, 01, 07),
                City = "Huntersville",
                State = "NC",
                Id = 1
            };

            bool validateAllProperties = false;

            Validator.TryValidateObject(testConference,
                new ValidationContext(testConference, null, null),
                testConference.ValidationResults,
                validateAllProperties);

            Assert.AreEqual(1, testConference.ValidationResults.Where((result) => result.MemberNames.Contains("Location")).Count(), "Conference location should be missing.");

        }

        [TestMethod]
        public void ConferenceStartDateMissing()
        {
            var testConference = new Conference()
            {
                Name = "Test Conference",
                Location = "Test Location",
                EndDate = new DateTime(2017, 01, 07),
                City = "Huntersville",
                State = "NC",
                Id = 1
            };

            bool validateAllProperties = false;

            Validator.TryValidateObject(testConference,
                new ValidationContext(testConference, null, null),
                testConference.ValidationResults,
                validateAllProperties);

            Assert.AreEqual(1, testConference.ValidationResults.Where((result) => result.MemberNames.Contains("StartDate")).Count(), "Conference start date should be missing.");

        }

        [TestMethod]
        public void ConferenceEndDateMissing()
        {
            var testConference = new Conference()
            {
                Name = "Test Conference",
                Location = "",
                StartDate = new DateTime(2017, 01, 01),
                City = "Huntersville",
                State = "NC",
                Id = 1
            };

            bool validateAllProperties = false;

            Validator.TryValidateObject(testConference,
                new ValidationContext(testConference, null, null),
                testConference.ValidationResults,
                validateAllProperties);

            Assert.AreEqual(1, testConference.ValidationResults.Where((result) => result.MemberNames.Contains("EndDate")).Count(), "Conference end date should be missing.");

        }

        [TestMethod]
        public void ConferenceCityMissing()
        {
            var testConference = new Conference()
            {
                Name = "Test Conference",
                Location = "Test Location",
                StartDate = new DateTime(2017, 01, 01),
                EndDate = new DateTime(2017, 01, 07),
                City = "",
                State = "NC",
                Id = 1
            };

            bool validateAllProperties = false;

            Validator.TryValidateObject(testConference,
                new ValidationContext(testConference, null, null),
                testConference.ValidationResults,
                validateAllProperties);

            Assert.AreEqual(1, testConference.ValidationResults.Where((result) => result.MemberNames.Contains("City")).Count(), "Conference city should be missing.");

        }

        [TestMethod]
        public void ConferenceStateMissing()
        {
            var testConference = new Conference()
            {
                Name = "Test Conference",
                Location = "Test Location",
                StartDate = new DateTime(2017, 01, 01),
                EndDate = new DateTime(2017, 01, 07),
                City = "Huntersville",
                State = "",
                Id = 1
            };

            bool validateAllProperties = false;

            Validator.TryValidateObject(testConference,
                new ValidationContext(testConference, null, null),
                testConference.ValidationResults,
                validateAllProperties);

            Assert.AreEqual(1, testConference.ValidationResults.Where((result) => result.MemberNames.Contains("State")).Count(), "Conference state should be missing.");

        }
    }
}

using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using sregister_core.Models;

namespace sregister_core.Tests
{
    [TestClass]
    public class SpeakerTests
    {
        [TestMethod]
        public void SpeakerFirstNameMissing()
        {
            var testSpeaker = new Speaker
            {
                FirstName = "",
                LastName = "LastName",
                Address1 = "Address 1",
                Address2 = "Address 2",
                City = "City",
                State = "NC",
                Zipcode = "11111",
                PhoneNumber = "7777777777",
                EmailAddress = "email@email.com",
                Id = 1
            };

            bool validateAllProperties = false;

            Validator.TryValidateObject(
                testSpeaker,
                new ValidationContext(testSpeaker, null, null),
                testSpeaker.ValidationResults,
                validateAllProperties);

            Assert.AreEqual(1, testSpeaker.ValidationResults.Where((result) => result.MemberNames.Contains("FirstName")).Count(), "First name should be missing.");
        }

        [TestMethod]
        public void SpeakerLastNameMissing()
        {
            var testSpeaker = new Speaker
            {
                FirstName = "FirstName",
                LastName = "",
                Address1 = "Address 1",
                Address2 = "Address 2",
                City = "City",
                State = "NC",
                Zipcode = "11111",
                PhoneNumber = "7777777777",
                EmailAddress = "email@email.com",
                Id = 1
            };

            bool validateAllProperties = false;

            Validator.TryValidateObject(
                testSpeaker,
                new ValidationContext(testSpeaker, null, null),
                testSpeaker.ValidationResults,
                validateAllProperties);

            Assert.AreEqual(1, testSpeaker.ValidationResults.Where((result) => result.MemberNames.Contains("LastName")).Count(), "Last name should be missing.");
        }

        [TestMethod]
        public void SpeakerEmailAddressMissing()
        {
            var testSpeaker = new Speaker
            {
                FirstName = "FirstName",
                LastName = "LastName",
                Address1 = "Address 1",
                Address2 = "Address 2",
                City = "City",
                State = "NC",
                Zipcode = "11111",
                PhoneNumber = "7777777777",
                EmailAddress = "",
                Id = 1
            };

            bool validateAllProperties = false;

            Validator.TryValidateObject(
                testSpeaker,
                new ValidationContext(testSpeaker, null, null),
                testSpeaker.ValidationResults,
                validateAllProperties);

            Assert.AreEqual(1, testSpeaker.ValidationResults.Where((result) => result.MemberNames.Contains("EmailAddress")).Count(), "Email address should be missing.");
        }

        [TestMethod]
        public void SpeakerPhoneNumberMissing()
        {
            var testSpeaker = new Speaker
            {
                FirstName = "FirstName",
                LastName = "LastName",
                Address1 = "Address 1",
                Address2 = "Address 2",
                City = "City",
                State = "NC",
                Zipcode = "11111",
                PhoneNumber = "",
                EmailAddress = "email@email.com",
                Id = 1
            };

            bool validateAllProperties = false;

            Validator.TryValidateObject(
                testSpeaker,
                new ValidationContext(testSpeaker, null, null),
                testSpeaker.ValidationResults,
                validateAllProperties);

            Assert.AreEqual(1, testSpeaker.ValidationResults.Where((result) => result.MemberNames.Contains("PhoneNumber")).Count(), "Phone number should be missing.");
        }

        [TestMethod]
        public void SpeakerAddress1Missing()
        {
            var testSpeaker = new Speaker
            {
                FirstName = "FirstName",
                LastName = "LastName",
                Address1 = "",
                Address2 = "Address 2",
                City = "City",
                State = "NC",
                Zipcode = "11111",
                PhoneNumber = "7777777777",
                EmailAddress = "email@email.com",
                Id = 1
            };

            bool validateAllProperties = false;

            Validator.TryValidateObject(
                testSpeaker,
                new ValidationContext(testSpeaker, null, null),
                testSpeaker.ValidationResults,
                validateAllProperties);

            Assert.AreEqual(1, testSpeaker.ValidationResults.Where((result) => result.MemberNames.Contains("Address1")).Count(), "Address1 should be missing.");
        }

        [TestMethod]
        public void SpeakerCityMissing()
        {
            var testSpeaker = new Speaker
            {
                FirstName = "FirstName",
                LastName = "LastName",
                Address1 = "Address 1",
                Address2 = "Address 2",
                City = "",
                State = "NC",
                Zipcode = "11111",
                PhoneNumber = "7777777777",
                EmailAddress = "email@email.com",
                Id = 1
            };

            bool validateAllProperties = false;

            Validator.TryValidateObject(
                testSpeaker,
                new ValidationContext(testSpeaker, null, null),
                testSpeaker.ValidationResults,
                validateAllProperties);

            Assert.AreEqual(1, testSpeaker.ValidationResults.Where((result) => result.MemberNames.Contains("City")).Count(), "City should be missing.");
        }

        [TestMethod]
        public void SpeakerStateMissing()
        {
            var testSpeaker = new Speaker
            {
                FirstName = "FirstName",
                LastName = "LastName",
                Address1 = "Address 1",
                Address2 = "Address 2",
                City = "City",
                State = "",
                Zipcode = "11111",
                PhoneNumber = "7777777777",
                EmailAddress = "email@email.com",
                Id = 1
            };

            bool validateAllProperties = false;

            Validator.TryValidateObject(
                testSpeaker,
                new ValidationContext(testSpeaker, null, null),
                testSpeaker.ValidationResults,
                validateAllProperties);

            Assert.AreEqual(1, testSpeaker.ValidationResults.Where((result) => result.MemberNames.Contains("State")).Count(), "State should be missing.");
        }

        [TestMethod]
        public void SpeakerZipCodeMissing()
        {
            var testSpeaker = new Speaker
            {
                FirstName = "FirstName",
                LastName = "LastName",
                Address1 = "Address 1",
                Address2 = "Address 2",
                City = "City",
                State = "NC",
                Zipcode = "",
                PhoneNumber = "7777777777",
                EmailAddress = "email@email.com",
                Id = 1
            };

            bool validateAllProperties = false;

            Validator.TryValidateObject(
                testSpeaker,
                new ValidationContext(testSpeaker, null, null),
                testSpeaker.ValidationResults,
                validateAllProperties);

            Assert.AreEqual(1, testSpeaker.ValidationResults.Where((result) => result.MemberNames.Contains("Zipcode")).Count(), "Zipcode should be missing.");
        }
    }
}

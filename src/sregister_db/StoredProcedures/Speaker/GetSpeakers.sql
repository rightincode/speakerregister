CREATE PROCEDURE [dbo].[GetSpeakers]
AS
	SELECT [Id]
	, [FirstName]
	, [LastName]
	, [Address1]
	, [Address2]
	, [City]
	, [State]
	, [Zipcode]
	, [EmailAddress]
	, [PhoneNumber]
	FROM Speaker
	WHERE [Deleted] = 0
RETURN 0

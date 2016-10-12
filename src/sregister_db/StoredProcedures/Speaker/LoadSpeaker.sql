CREATE PROCEDURE [dbo].[LoadSpeaker]
	@Id	int
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
	WHERE Id = @Id
RETURN 0

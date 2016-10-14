CREATE PROCEDURE [dbo].[LoadConference]
	@Id		int
AS
	SELECT [Id]
	, [Name]
	, [Location]
	, [StartDate]
	, [EndDate]
	, [City]
	, [State]	
	FROM dbo.Conference
	WHERE Id = @Id AND [Deleted] = 0
RETURN 0

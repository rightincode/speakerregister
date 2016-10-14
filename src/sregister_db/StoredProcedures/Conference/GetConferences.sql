CREATE PROCEDURE [dbo].[GetConferences]
AS
	SELECT [Id]
	, [Name]
	, [Location]
	, [StartDate]
	, [EndDate]
	, [City]
	, [State]	
	FROM dbo.Conference
	WHERE [Deleted] = 0
RETURN 0

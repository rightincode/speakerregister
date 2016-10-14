CREATE PROCEDURE [dbo].[SaveConference]
	@Id				INT,
	@Name			NVARCHAR(450),
	@Location		NVARCHAR(450),
	@StartDate		DATETIME,
	@EndDate		DATETIME,
	@City			NVARCHAR(450),
	@State			NVARCHAR(100)
AS
BEGIN TRY
	BEGIN TRANSACTION

	IF (@Id <= 0)
	BEGIN
		INSERT INTO dbo.Conference
		([Name], [Location], [StartDate], [EndDate], [City], [State])
		VALUES(@Name, @Location, @StartDate, @EndDate, @City, @State)

		SET @Id = SCOPE_IDENTITY();
	END
	ELSE
	BEGIN
		UPDATE dbo.Conference
		SET [Name] = @Name, [Location] = @Location, [StartDate] = @StartDate, [EndDate] = @EndDate, [City] = @City,
		[State] = @State
		WHERE [Id] = @Id
	END

	COMMIT TRANSACTION

	EXEC dbo.LoadConference @Id

END TRY
BEGIN CATCH
	IF @@TRANCOUNT > 0
		ROLLBACK TRANSACTION;

	THROW;
END CATCH

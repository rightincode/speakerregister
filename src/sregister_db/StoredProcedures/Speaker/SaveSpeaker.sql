CREATE PROCEDURE [dbo].[SaveSpeaker]
	@Id				INT,
	@FirstName		NVARCHAR(100),
	@LastName		NVARCHAR(100),
	@Address1		NVARCHAR(450),
	@Address2		NVARCHAR(450)	=	NULL,
	@City			NVARCHAR(450),
	@State			NVARCHAR(100),
	@Zipcode		NVARCHAR(50),
	@EmailAddress	NVARCHAR(450),
	@PhoneNumber	NVARCHAR(100)
AS
BEGIN TRY
	BEGIN TRANSACTION

	IF (@Id <= 0)
	BEGIN
		INSERT INTO dbo.Speaker
		([FirstName], [LastName], [Address1], [Address2], [City], [State], [Zipcode], [EmailAddress], [PhoneNumber])
		VALUES(@FirstName, @LastName, @Address1, @Address2, @City, @State, @Zipcode, @EmailAddress, @PhoneNumber)

		SET @Id = SCOPE_IDENTITY();
	END
	ELSE
	BEGIN
		UPDATE dbo.Speaker
		SET [FirstName] = @FirstName, [LastName] = @LastName, [Address1] = @Address1, [Address2] = @Address2, [City] = @City,
		[State] = @State, [Zipcode] = @Zipcode, [EmailAddress] = @EmailAddress, [PhoneNumber] = @PhoneNumber
		WHERE [Id] = @Id
	END

	COMMIT TRANSACTION

	EXEC dbo.LoadSpeaker @Id

END TRY
BEGIN CATCH
	IF @@TRANCOUNT > 0
		ROLLBACK TRANSACTION;

	THROW;
END CATCH

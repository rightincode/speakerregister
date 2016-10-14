CREATE TABLE [dbo].[Speaker]
(
	[Id] INT NOT NULL  IDENTITY, 
    [FirstName] NVARCHAR(100) NOT NULL, 
    [LastName] NVARCHAR(100) NOT NULL, 
    [Address1] NVARCHAR(450) NOT NULL, 
    [Address2] NVARCHAR(450) NULL, 
    [City] NVARCHAR(450) NOT NULL, 
    [State] NVARCHAR(100) NOT NULL, 
    [Zipcode] NVARCHAR(50) NOT NULL, 
    [EmailAddress] NVARCHAR(450) NOT NULL, 
    [PhoneNumber] NVARCHAR(100) NOT NULL, 
    [Deleted] BIT NOT NULL DEFAULT 0, 
    CONSTRAINT [PK_Speaker] PRIMARY KEY ([Id])
)

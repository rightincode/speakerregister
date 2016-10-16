CREATE TABLE [dbo].[Conference]
(
	[Id] INT NOT NULL  IDENTITY, 
    [Name] NVARCHAR(450) NOT NULL, 
    [Location] NVARCHAR(450) NOT NULL, 
    [StartDate] DATE NOT NULL, 
    [EndDate] DATE NOT NULL, 
    [City] NVARCHAR(450) NOT NULL, 
    [State] NVARCHAR(100) NOT NULL, 
    [Deleted] BIT NOT NULL DEFAULT 0, 
    CONSTRAINT [PK_Conference] PRIMARY KEY ([Id])
)

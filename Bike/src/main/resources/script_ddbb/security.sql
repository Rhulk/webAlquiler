CREATE TABLE [dbo].[users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](45) NOT NULL,
	[email] [varchar](100) NOT NULL,
	[telf] [int] null,
	[username] [varchar](45) NOT NULL,
	[password] [varchar](100) NOT NULL,
	[estatus] [int] NOT NULL,
	[fechaRegistro] [date] NULL,
	[dni] [varchar](10)
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [email_UNIQUE] UNIQUE NONCLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [username_UNIQUE] UNIQUE NONCLUSTERED 
(
	[username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[users] ADD  DEFAULT ('1') FOR [estatus]
GO

ALTER TABLE [dbo].[users] ADD  DEFAULT (GETDATE()) FOR [fechaRegistro]
GO

/**

**/

CREATE TABLE [dbo].[authorities](
	[username] [varchar](50) NOT NULL,
	[authority] [varchar](50) NOT NULL,
 CONSTRAINT [authorities_idx_1] UNIQUE NONCLUSTERED 
(
	[username] ASC,
	[authority] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/*
no lanzadas
*/
ALTER TABLE [dbo].[authorities]  WITH CHECK ADD  CONSTRAINT [authorities_ibfk_] FOREIGN KEY([username])
REFERENCES [dbo].[users] ([username])
GO

ALTER TABLE [dbo].[authorities] CHECK CONSTRAINT [authorities_ibfk_]
GO

/**
 Enlace entre tablas
**/
CREATE TABLE [dbo].[UsuarioPerfil](
	[idUsuario] [int] NOT NULL,
	[idPerfil] [int] NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[UsuarioPerfil]  WITH CHECK ADD  CONSTRAINT [fk_Perfiles] FOREIGN KEY([idPerfil])
REFERENCES [dbo].[authorities] ([id])
GO

ALTER TABLE [dbo].[UsuarioPerfil] CHECK CONSTRAINT [fk_Perfiles]
GO

ALTER TABLE [dbo].[UsuarioPerfil]  WITH CHECK ADD  CONSTRAINT [fk_Usuarios] FOREIGN KEY([idUsuario])
REFERENCES [dbo].[users] ([id])
GO

ALTER TABLE [dbo].[UsuarioPerfil] CHECK CONSTRAINT [fk_Usuarios]
GO
-- CreateTable
CREATE TABLE `Pelicula` (
    `title` VARCHAR(255) NOT NULL,
    `rank` INTEGER NOT NULL,
    `id` VARCHAR(10) NOT NULL,
    `calif` VARCHAR(2) NOT NULL,

    PRIMARY KEY (`title`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `Nombre` VARCHAR(255) NOT NULL,
    `Rango` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`Nombre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

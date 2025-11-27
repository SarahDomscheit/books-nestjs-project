# Books NestJS Project

Eine RESTful API zur Verwaltung von Büchern, entwickelt mit NestJS, TypeORM und SQLite.

## Beschreibung

Dieses Projekt ist eine vollständige CRUD-API für die Verwaltung einer Büchersammlung. Die Anwendung verwendet NestJS als Framework, TypeORM für die Datenbankanbindung und SQLite als Datenbank.

## Features

- CRUD-Operationen für Bücher (Erstellen, Lesen, Aktualisieren, Löschen)
- UUID als primärer Schlüssel
- Validierung von Eingabedaten mit class-validator
- API-Dokumentation mit Swagger/OpenAPI
- SQLite-Datenbank
- TypeORM Integration

## API-Endpunkte

### Swagger-Dokumentation

Die interaktive API-Dokumentation ist verfügbar unter: `http://localhost:3000/api`

### Verfügbare Endpunkte

| Methode | Endpunkt     | Beschreibung             |
| ------- | ------------ | ------------------------ |
| GET     | `/books`     | Alle Bücher abrufen      |
| GET     | `/books/:id` | Ein Buch nach ID abrufen |
| POST    | `/books`     | Neues Buch erstellen     |
| PUT     | `/books/:id` | Buch aktualisieren       |
| DELETE  | `/books/:id` | Buch löschen             |

### Beispiel-Requests

**Buch erstellen (POST /books)**

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedYear": 1925
}
```

**Buch aktualisieren (PUT /books/:id)**

```json
{
  "title": "The Great Gatsby - Updated",
  "author": "F. Scott Fitzgerald",
  "publishedYear": 1925
}
```

## Datenmodell

Die [`Books`](src/books/entities/books.entity.ts)-Entität hat folgende Eigenschaften:

- `id` (string, UUID): Eindeutiger Identifikator
- `title` (string): Titel des Buches
- `author` (string): Autor des Buches
- `publishedYear` (number): Erscheinungsjahr

## Projektstruktur

```
src/
├── books/
│   ├── dto/
│   │   └── books.input.dto.ts      # DTO für Eingabedaten
│   ├── entities/
│   │   └── books.entity.ts         # Book-Entity
│   ├── books.controller.ts         # Controller für Book-Endpunkte
│   ├── books.service.ts            # Business-Logik
│   ├── books.module.ts             # Books-Modul
│   └── *.spec.ts                   # Test-Dateien
├── app.module.ts                   # Haupt-Anwendungsmodul
├── app.controller.ts               # Root-Controller
├── app.service.ts                  # Root-Service
└── main.ts                         # Einstiegspunkt der Anwendung
```

## Konfiguration

Die Anwendung verwendet folgende Konfigurationen:

- **Port:** Standardmäßig 3000 (kann über `PORT` Umgebungsvariable angepasst werden)
- **Datenbank:** SQLite-Datei `books.db` im Projektverzeichnis
- **Synchronize:** Aktiviert in der Entwicklung (automatische Schema-Synchronisation)

## Module und Services

- [`BooksModule`](src/books/books.module.ts): Hauptmodul für die Bücherverwaltung
- [`BooksService`](src/books/books.service.ts): Service mit CRUD-Operationen
- [`BooksController`](src/books/books.controller.ts): REST-Controller mit API-Endpunkten

**Hinweis**
Dies ist ein Lernprojekt zum Vertiefen von NestJS, Swagger, SQLite und TypeORM

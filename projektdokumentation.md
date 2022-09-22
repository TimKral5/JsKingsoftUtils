# Projekt-Dokumentation

## JQuery:
Dies ist ein Projekt von Tim Kral.

| Datum     | Version | Zusammenfassung                                                           |
|-----------|---------| --------------------------------------------------------------------------|
| 25.8.2022 | 0.0.1   | Gegeben ist eine bereits angefangene Arbeit, die weitergeführt wird.      |
|           | 0.0.2   | JqElement implementiert; jq() implementiert; JqElement.attr implementiert |
|           | 0.0.3   |                                                                           |

## 1 Informieren

### 1.1 Mein Projekt

Dies ist eine Klassenbibliothek für Javascript, die das Generieren und Manipulieren von HTML-Dokumenten erleichtern soll.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                                                                              |
|------|-----------------|------|-------------------------------------------------------------------------------------------|
| 1    |                 |      | Als Entwickler möchte ich bereits existierende HTML-Elemente finden.                      |
| 2    |                 |      | Als Entwickler möchte ich die Attribute der HTML-Elemente bearbeiten können.              |
| 3    |                 |      | Als Entwickler möchte ich innere Elemente der HTML-Elemente filtern und speichern können. |
| 4    |                 |      | Als Entwickler möchte ich einem HTML-Element übergeordnete Elemente ansteuern können.     |
| 5    |                 |      | Als Entwickler möchte ich einem HTML-Element untergeordnete Elemente hinzufügen können.   |

### 1.3 Testfälle

| TC-№ | Ausgangslage                   | Eingabe                                         | Erwartete Ausgabe                                |
|------|--------------------------------|-------------------------------------------------|--------------------------------------------------|
| 1.1  | Funktion: get Element          | CSS-Query des gesuchten Elements                | Repräsentierender Wert für das Element           |
| 1.1  | Funktion: get Element          | CSS-Query des gesuchten Elements                | 'undefined', falls nicht definiert               |
| 2.1  | Funktion: get Attribute        | Name des Attributes                             | Wert des Attributes                              |
| 2.2  | Funktion: get Attribute        | Name des Attributes                             | 'undefined', falls nicht definiert               |
| 3.1  | Funktion: get child / children | CSS-Query der gesuchten Elemente                | Repräsentierender Wert für die Elemente          |
| 3.2  | Funktion: get child / children | CSS-Query der gesuchten Elemente                | 'undefined', falls Element nicht findbar         |
| 4.1  | Funktion: get parent           | keine                                           | übergeordnetes Element                           |
| 4.2  | Funktion: get parent           | keine                                           | 'undefined', falls Element nicht findbar         |
| 5.1  | Funktion: create child         | Tag, Attribute und innerHTML des Elements       | Repräsentierender Wert für das erstellte Element |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

### 1.4 Diagramme

✍️ Hier können Sie PAPs, Use Case- und Gantt-Diagramme oder Ähnliches einfügen.

## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |       |           |              |               |
| ...  |       |           |              |               |

Total: 

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, auf die sich das Arbeitspaket bezieht, und `m` von `A` an nach oben buchstabiert. Beispiel: Das dritte Arbeitspaket, das die zweite User Story betrifft, hat also die Nummer `2.C`.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |           |               |                   |
| ...  |       |           |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

### 5.2 Exploratives Testen

| BR-№ | Ausgangslage | Eingabe | Erwartete Ausgabe | Tatsächliche Ausgabe |
| ---- | ------------ | ------- | ----------------- | -------------------- |
| I    |              |         |                   |                      |
| ...  |              |         |                   |                      |

✍️ Verwenden Sie römische Ziffern für Ihre Bug Reports, also I, II, III, IV etc.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.
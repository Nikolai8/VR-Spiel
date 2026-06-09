# VR-Spiel 🎮

Ein immersives VR-Spiel entwickelt mit **Three.js** für die **Oculus VR-Brille**, entstanden als Studienprojekt im Bereich Mensch-Computer-Interaktion (MCI).

## 📋 Projektübersicht

**VR-Spiel** ist ein innovatives Virtual-Reality-Spiel, bei dem der Spieler mit einem Laser-Pointer dynamische Minen abschießen muss, die auf den Spieler zufliegen. Das Projekt demonstriert die praktische Anwendung von **Three.js** für 3D-Grafiken und **WebXR API** für VR-Interaktion.

Das Spiel wurde konzipiert, um die Möglichkeiten von VR-Eingaben und immersiven Umgebungen optimal zu nutzen und ein spannendes Spielerlebnis zu schaffen.

## 🎮 Spielmechanik

- **VR-Immersion**: Vollständig immersive Erfahrung mit Oculus VR-Brille
- **Laser-Pointer-Steuerung**: Ziele mit deinem Controller und schieße Minen ab
- **Dynamische Gegner**: Minen (Kugeln mit rotierenden Sprengköpfen) fliegen auf den Spieler zu
- **Raycasting**: Präzise Kollisionserkennung mittels 3D Raycasting
- **Gewinn-/Verlustbedingungen**: Gewinne durch das Abschießen aller Minen, verliere wenn sie dich treffen
- **Atmosphärische Grafik**: Farbcodierte Rückmeldung (Blau = Normal, Grün = Gewonnen, Rot = Verloren)

## 🛠️ Technologie

- **Sprache**: JavaScript (100%)
- **3D-Engine**: Three.js Module (r128 oder später)
- **VR-Standard**: WebXR API
- **Plattform**: Web-basiert, optimiert für Oculus VR-Geräte
- **Graphics**: WebGL mit Shadow Mapping
- **Input-Methode**: VR-Controller (Trigger zum Schießen/Greifen)

## 📱 Anforderungen

- **VR-Hardware**: Oculus-kompatibles VR-Headset (Oculus Quest, Rift, etc.)
- **Browser**: WebXR-fähiger Browser (Chrome, Edge, Firefox Reality)
- **WebXR-Unterstützung**: Browser mit `navigator.xr` API
- **WebGL 2.0**: Moderngrafische Unterstützung

## 🚀 Erste Schritte

1. Projekt klonen:
```bash
git clone https://github.com/Nikolai8/VR-Spiel.git
cd VR-Spiel
```

2. Mit lokalem Server bereitstellen (wichtig für WebXR):
```bash
# Beispiel mit Python 3
python -m http.server 8000

# Oder mit Node.js http-server
npx http-server
```

3. Im Browser öffnen: `http://localhost:8000`

4. "ENTER VR" Button drücken und VR-Brille aufsetzen

5. Mit dem Controller-Trigger die Minen abschießen und gewinnen!

## 🎯 Spielelemente

### Minen
- **Erscheinung**: Kugeln mit rotierenden Sprengköpfen (Kegel-Strukturen)
- **Verhalten**: Fliegen zufällig positioniert auf den Spieler zu
- **Zerstörung**: Durch den Laser-Pointer beim Trigger-Druck

### Laser-Pointer
- **Herkunft**: Position und Orientierung des VR-Controllers
- **Darstellung**: Gelbe Linie vom Controller zur Zielposition
- **Reichweite**: 5 Einheiten oder bis zur nächsten Mine

### Spielverlauf
- **Gewinn**: Alle Minen abgeschossen (Array leer)
- **Verlust**: Eine Mine trifft den Spieler im Kopfbereich (1.45-1.75 Y-Position, ±0.25 X-Position)
- **Status**: Farbcodierte Bildschirmhintergründe zeigen Spielstatus an

## 📂 Projektstruktur

```
VR-Spiel/
├── index.html          # HTML-Entry Point
├── app.js              # Hauptanwendung, Three.js Import und Setup
├── vr.js               # WebXR Renderer und VR-Session-Management
├── ray_demo.js         # Spiellogik, Raycast und Minen-Spawning
├── basics.js           # Scene und Camera Setup
├── geo.js              # Mesh-Erstellung (Geometrien)
├── style.css           # Styling
├── three.module.js     # Three.js Library (v128+)
├── LICENSE             # MIT License mit Educational Use Only
└── README.md           # Diese Datei
```

## 🎓 Kontext

Dieses Projekt wurde entwickelt als Teil eines Studienprojekts im Bereich **Mensch-Computer-Interaktion (MCI)** mit dem Fokus auf:

- **3D-Grafik-Programmierung** mit Three.js
- **VR-Entwicklung** mit WebXR API
- **Interaktive Spielmechanik** in virtuellen Umgebungen
- **Raycasting und Kollisionserkennung** in 3D
- **User Experience** für VR-Interfaces
- **Immersive Gaming-Erlebnis** Design

## 🔧 Technische Details

### WebXR Integration
- Verwendet `navigator.xr.requestSession('immersive-vr')` für VR-Session
- Unterstützt optionale Features: 'local-floor', 'bounded-floor'
- Gamepad-Input für Controller-Buttons und Trigger

### 3D Rendering
- WebGL Renderer mit Anti-Aliasing und Shadow Mapping
- PCF-Shadows für realistische Beleuchtung
- Sky-Blue Hintergrund (#73C2FB) mit dynamischen Farbänderungen

### Raycast-System
- Präzise Raycasting vom Controller für Ziel-Erkennung
- Dynamische Strahl-Längenberechnung
- Intersection-Testing mit Minen-Array

### Spiellogik
- Automatisches Heranfliegen der Minen mit Zielsuche
- Trigger-basiertes Greifen und Schießen
- Matrix-Transformation für VR-Positionierung

## 🎯 Ziel des Projekts

Das Projekt diente der praktischen Erforschung und Implementierung von:
- Effektiven 3D-Rendering-Techniken mit Three.js
- WebXR-Standard für immersive Web-Erfahrungen
- VR-Gameplay-Mechaniken und Interaktionsdesign
- Real-time Raycast-basierte Zielerfassung
- Immersive User Experience Design für VR-Geräte

## 📝 Lizenz

Dieses Projekt ist lizenziert unter der **MIT License mit Educational Use Only Clause**.

**Wichtig**: 
- ✅ Verwendung, Modifikation und Lernen für **Bildungszwecke erlaubt**
- ❌ **Kommerzielle Nutzung verboten** (ohne explizite Genehmigung)
- ❌ **Copy-Paste als eigenes Projekt/Hausaufgabe verboten**
- ✅ **Quellenangabe erforderlich** bei Verwendung

Siehe [LICENSE](LICENSE) für vollständige Details.

## 🤝 Beitragen

Fragen oder Verbesserungsvorschläge zum Projekt? Gerne können Issues erstellt oder Diskussionen geführt werden.

---

**Viel Spaß beim Spielen in VR! 🥽🎮**

*Entwickelt als MCI-Studienprojekt*

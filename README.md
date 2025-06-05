# EM UI Library

## Description
EM UI Library is a custom React component library built following Atomic Design principles.  
It contains basic UI elements (atoms), composed components (molecules), larger units (organisms), templates, and layouts for rapid application development.

---

## Library Structure

- **atoms** – basic components like buttons, inputs, labels, checkboxes, etc.
- **molecules** – composed components such as Card, Modal, Notification, Tabs, ButtonGroup.
- **organisms** – larger units like Login form, Register form, Dashboard, Notification Center.
- **templates** – predefined page templates that assemble organisms.
- **layouts** – base application layouts (e.g. main layout with navigation, sidebar, etc.).

---

## Components

### Atoms
- Button
- Input
- Checkbox
- RadioButton
- Select
- Label
- Spinner
- Textarea

### Molecules
- Accordion
- Avatar
- Badge
- ButtonGroup
- Card
- FormField
- Modal
- Notification
- Tabs
- Tooltip

### Organisms
- Dashboard
- Footer
- Header
- ListView
- Login
- NotificationCenter
- Register
- SearchBar
- Sidebar
- UserProfile

### Templates
- AuthLayout
- DashboardLayout
- FormLayout
- ProfileLayout
- SettingsLayout

## Installation and Usage

### Installing the library in your project

```bash
npm install em-ui-library
```

Using Components

Import components from the library:
```
import { Button, Input, Card, Login } from 'em-ui-library';

function App() {
  return (
    <div>
      <Login />
      <Button>Click me</Button>
    </div>
  );
}
```

# EM UI Library

## Popis
EM UI Library je vlastní React komponentová knihovna postavená podle principů Atomic Designu.  
Obsahuje základní UI prvky (atoms), složené komponenty (molecules), větší celky (organisms), šablony (templates) a layouty pro rychlou tvorbu aplikací.

---

## Struktura knihovny

- **atoms** – základní komponenty jako tlačítka, inputy, labely, checkboxy atd.
- **molecules** – složené komponenty, např. Card, Modal, Notification, Tabs, ButtonGroup.
- **organisms** – větší celky jako Login formulář, Register formulář, Dashboard, Notification Center.
- **templates** – předdefinované šablony stránek skládající organisms.
- **layouts** – základní layouty aplikace (např. hlavní layout s navigací, sidebar apod.).

---

## Instalace a použití

### Instalace knihovny do projektu

```bash

npm install em-ui-library
```


Použití komponentů

Import komponentů z knihovny:
```
import { Button, Input, Card, Login } from 'em-ui-library';

function App() {
  return (
    <div>
      <Login />
      <Button>Click me</Button>
    </div>
  );
}
```

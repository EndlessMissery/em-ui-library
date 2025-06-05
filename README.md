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

---

## Installation and Usage

### Installing the library in your project

```bash
npm install em-ui-library
```

## Using Components

# Import atoms from the library:
```
import { Button } from 'em-ui-library';

function App() {
  return (
    <div>
      <Login />
      <Button>Click me</Button>
    </div>
  );
}
```

---

## Molecules usage examples

## Accordion
```
import { Accordion } from 'em-ui-library';

<Accordion title="Více informací">
  <p>Obsah akordeonu</p>
</Accordion>
```

## Avatar
```
import { Avatar } from 'em-ui-library';

<Avatar src="https://example.com/avatar.jpg" alt="Roman Kalita" />
```

## Badge
```
import { Badge } from 'em-ui-library';

<Badge type="info">Nové</Badge>
```

## ButtonGroup
```
import { ButtonGroup, Button } from 'em-ui-library';

<ButtonGroup>
  <Button>Uložit</Button>
  <Button>Zrušit</Button>
</ButtonGroup>
```

## Card
```
import { Card } from 'em-ui-library';

<Card>
  <h3>Název</h3>
  <p>Obsah karty</p>
</Card>
```

## Form Field
```
import { FormField, Input, Label } from 'em-ui-library';

<FormField>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
</FormField>
```

## Modal
```
import { Modal, Button } from 'em-ui-library';

<Modal isOpen={true} onClose={() => console.log('Zavřeno')}>
  <h2>Upozornění</h2>
  <p>Chcete pokračovat?</p>
  <Button>OK</Button>
</Modal>
```

### Notification
```
import { Notification } from 'em-ui-library';

function App() {
  return (
    <Notification
      type="success"
      message="Uloženo úspěšně!"
    />
  );
}
```

## Tabs
```
import { Tabs } from 'em-ui-library';

<Tabs
  tabs={[
    { id: 1, label: "Přehled" },
    { id: 2, label: "Nastavení" },
  ]}
/>

```

## Tooltip
```
import { Tooltip } from 'em-ui-library';

<Tooltip content="Nápověda">
  <button>?</button>
</Tooltip>
```

---

### Organisms usage examples

## Dashboard
```
import { Dashboard } from 'em-ui-library';

const stats = [
  { id: 1, title: 'Uživatelé', value: 1500, icon: '👥' },
  { id: 2, title: 'Tržby', value: '450 000 Kč', icon: '💰' },
];

<Dashboard stats={stats} />
```

## Header
```
import { Header } from 'em-ui-library';

<Header title="Administrace" />
```

## Footer
```
import { Footer } from 'em-ui-library';

<Footer>
  <p>© 2025 EM Company</p>
</Footer>
```

## ListView
```
import { ListView } from 'em-ui-library';

<ListView
  items={[
    { id: 1, title: 'Záznam 1' },
    { id: 2, title: 'Záznam 2' },
  ]}
/>
```

## Login
```
import { Login } from 'em-ui-library';

<Login onSubmit={(data) => console.log('Přihlášen:', data)} />
```

## NotificationCenter
```
import { NotificationCenter } from 'em-ui-library';

const notifications = [
  { id: 1, type: 'success', message: 'Úspěšně uloženo' },
  { id: 2, type: 'error', message: 'Chyba serveru' },
];

<NotificationCenter
  notifications={notifications}
  onDismiss={(id) => console.log('Zavřeno', id)}
/>
```

## Register
```
import { Register } from 'em-ui-library';

<Register onSubmit={(data) => console.log('Registrován:', data)} />
```

## SearchBar
```
import { SearchBar } from 'em-ui-library';

<SearchBar
  placeholder="Hledat uživatele"
  onSearch={(query) => console.log('Hledat:', query)}
/>
```

## Sidebar
```
import { Sidebar } from 'em-ui-library';

<Sidebar
  items={[
    { id: 1, label: 'Dashboard' },
    { id: 2, label: 'Nastavení' },
  ]}
/>

```

## UserProfile
```
import { UserProfile } from 'em-ui-library';

<UserProfile
  user={{
    name: 'Roman Kalita',
    email: 'roman@example.com',
    avatar: 'https://example.com/avatar.jpg',
  }}
/>
```

---

# Templates usage examples

## AuthLayout
```
import { AuthLayout } from 'em-ui-library';

<AuthLayout>
  <h1>Přihlášení</h1>
  {/* Např. <Login /> */}
</AuthLayout>
```

## DashboardLayout
```
import { DashboardLayout } from 'em-ui-library';

<DashboardLayout>
  <h2>Přehled</h2>
</DashboardLayout>
```

## FormLayout
```
import { FormLayout } from 'em-ui-library';

<FormLayout title="Nový uživatel" description="Vyplňte prosím všechna pole">
  <form>…</form>
</FormLayout>
```

## ProfileLayout
```
import { ProfileLayout } from 'em-ui-library';

const user = {
  name: 'Roman Kalita',
  email: 'roman@example.com',
  avatar: 'https://example.com/avatar.jpg',
};

const tabs = [
  { id: 1, label: 'Profil' },
  { id: 2, label: 'Nastavení' },
];

<ProfileLayout user={user} tabs={tabs}>
  <p>Obsah profilu</p>
</ProfileLayout>
```

## SettingsLayout
```
import { SettingsLayout } from 'em-ui-library';

<SettingsLayout>
  <h2>Nastavení účtu</h2>
</SettingsLayout>
```

---

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

## Komponenty

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

---

## Instalace a použití

### Instalace knihovny do projektu

```bash

npm install em-ui-library
```

---

## Příklady použití komponentů v praxi

# Import atomů z knihovny:
```
import { Button } from 'em-ui-library';

function App() {
  return (
    <div>
      <Login />
      <Button>Click me</Button>
    </div>
  );
}
```

---

## Příklady využití Molecules

## Accordion
```
import { Accordion } from 'em-ui-library';

<Accordion title="Více informací">
  <p>Obsah akordeonu</p>
</Accordion>
```

## Avatar
```
import { Avatar } from 'em-ui-library';

<Avatar src="https://example.com/avatar.jpg" alt="Roman Kalita" />
```

## Badge
```
import { Badge } from 'em-ui-library';

<Badge type="info">Nové</Badge>
```

## ButtonGroup
```
import { ButtonGroup, Button } from 'em-ui-library';

<ButtonGroup>
  <Button>Uložit</Button>
  <Button>Zrušit</Button>
</ButtonGroup>
```

## Card
```
import { Card } from 'em-ui-library';

<Card>
  <h3>Název</h3>
  <p>Obsah karty</p>
</Card>
```

## Form Field
```
import { FormField, Input, Label } from 'em-ui-library';

<FormField>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
</FormField>
```

## Modal
```
import { Modal, Button } from 'em-ui-library';

<Modal isOpen={true} onClose={() => console.log('Zavřeno')}>
  <h2>Upozornění</h2>
  <p>Chcete pokračovat?</p>
  <Button>OK</Button>
</Modal>
```

### Notification
```
import { Notification } from 'em-ui-library';

function App() {
  return (
    <Notification
      type="success"
      message="Uloženo úspěšně!"
    />
  );
}
```

## Tabs
```
import { Tabs } from 'em-ui-library';

<Tabs
  tabs={[
    { id: 1, label: "Přehled" },
    { id: 2, label: "Nastavení" },
  ]}
/>

```

## Tooltip
```
import { Tooltip } from 'em-ui-library';

<Tooltip content="Nápověda">
  <button>?</button>
</Tooltip>
```

---

### Příklady využití Organisms

## Dashboard
```
import { Dashboard } from 'em-ui-library';

const stats = [
  { id: 1, title: 'Uživatelé', value: 1500, icon: '👥' },
  { id: 2, title: 'Tržby', value: '450 000 Kč', icon: '💰' },
];

<Dashboard stats={stats} />
```

## Header
```
import { Header } from 'em-ui-library';

<Header title="Administrace" />
```

## Footer
```
import { Footer } from 'em-ui-library';

<Footer>
  <p>© 2025 EM Company</p>
</Footer>
```

## ListView
```
import { ListView } from 'em-ui-library';

<ListView
  items={[
    { id: 1, title: 'Záznam 1' },
    { id: 2, title: 'Záznam 2' },
  ]}
/>
```

## Login
```
import { Login } from 'em-ui-library';

<Login onSubmit={(data) => console.log('Přihlášen:', data)} />
```

## NotificationCenter
```
import { NotificationCenter } from 'em-ui-library';

const notifications = [
  { id: 1, type: 'success', message: 'Úspěšně uloženo' },
  { id: 2, type: 'error', message: 'Chyba serveru' },
];

<NotificationCenter
  notifications={notifications}
  onDismiss={(id) => console.log('Zavřeno', id)}
/>
```

## Register
```
import { Register } from 'em-ui-library';

<Register onSubmit={(data) => console.log('Registrován:', data)} />
```

## SearchBar
```
import { SearchBar } from 'em-ui-library';

<SearchBar
  placeholder="Hledat uživatele"
  onSearch={(query) => console.log('Hledat:', query)}
/>
```

## Sidebar
```
import { Sidebar } from 'em-ui-library';

<Sidebar
  items={[
    { id: 1, label: 'Dashboard' },
    { id: 2, label: 'Nastavení' },
  ]}
/>

```

## UserProfile
```
import { UserProfile } from 'em-ui-library';

<UserProfile
  user={{
    name: 'Roman Kalita',
    email: 'roman@example.com',
    avatar: 'https://example.com/avatar.jpg',
  }}
/>
```

---

# Příklady využití Templates

## AuthLayout
```
import { AuthLayout } from 'em-ui-library';

<AuthLayout>
  <h1>Přihlášení</h1>
  {/* Např. <Login /> */}
</AuthLayout>
```

## DashboardLayout
```
import { DashboardLayout } from 'em-ui-library';

<DashboardLayout>
  <h2>Přehled</h2>
</DashboardLayout>
```

## FormLayout
```
import { FormLayout } from 'em-ui-library';

<FormLayout title="Nový uživatel" description="Vyplňte prosím všechna pole">
  <form>…</form>
</FormLayout>
```

## ProfileLayout
```
import { ProfileLayout } from 'em-ui-library';

const user = {
  name: 'Roman Kalita',
  email: 'roman@example.com',
  avatar: 'https://example.com/avatar.jpg',
};

const tabs = [
  { id: 1, label: 'Profil' },
  { id: 2, label: 'Nastavení' },
];

<ProfileLayout user={user} tabs={tabs}>
  <p>Obsah profilu</p>
</ProfileLayout>
```

## SettingsLayout
```
import { SettingsLayout } from 'em-ui-library';

<SettingsLayout>
  <h2>Nastavení účtu</h2>
</SettingsLayout>
```

---

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

## Components list
- [Atoms](#atoms)


- [Molecules](#molecules)
  - [Accordion](#accordion)
  - [Avatar](#avatar)
  - [Badge](#badge)
  - [ButtonGroup](#buttongroup) 
  - [Card](#card)
  - [FormField](#formfield)
  - [Modal](#modal)
  - [Notification](#notification)
  - [Tabs](#tabs)
  - [Tooltip](#tooltip)

- [Organisms](#organisms)
  - [Dashboard](#dashboard)
  - [Header](#header)
  - [Footer](#footer)
  - [ListView](#listview) 
  - [Login](#login)
  - [NotificationCenter](#notificationcenter)
  - [Register](#register)
  - [SearchBar](#searchbar)
  - [Sidebar](#sidebar)
  - [UserProfile](#userprofile)

- [Templates](#templates)
  - [AuthLayout](#authlayout)
  - [DashboardLayout](#dashboardlayout)
  - [FormLayout](#formlayout)
  - [ProfileLayout](#profilelayout)
  - [SettingsLayout](#settingslayout)
---

## Installation and Usage

### Installing the library in your project

```bash
npm install em-ui-library
```

## Using Components

## Atoms
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

## Molecules

## Accordion
```
import { Accordion } from 'em-ui-library';

<Accordion title="More information">
  <p>accordion example</p>
</Accordion>
```

## Avatar
```
import { Avatar } from 'em-ui-library';

<Avatar src="https://example.com/avatar.jpg" alt="avatar" />
```

## Badge
```
import { Badge } from 'em-ui-library';

<Badge type="info">New</Badge>
```

## ButtonGroup
```
import { ButtonGroup, Button } from 'em-ui-library';

<ButtonGroup>
  <Button>Save</Button>
  <Button>Cancel</Button>
</ButtonGroup>
```

## Card
```
import { Card } from 'em-ui-library';

<Card>
  <h3>Name</h3>
  <p>Card info</p>
</Card>
```

## FormField
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

<Modal isOpen={true} onClose={() => console.log('Close')}>
  <h2>Warning</h2>
  <p>Continue?</p>
  <Button>OK</Button>
</Modal>
```

## Notification
```
import { Notification } from 'em-ui-library';

function App() {
  return (
    <Notification
      type="success"
      message="Saved!"
    />
  );
}
```

## Tabs
```
import { Tabs } from 'em-ui-library';

<Tabs
  tabs={[
    { id: 1, label: "Tab 1" },
    { id: 2, label: "Tab 2" },
  ]}
/>

```

## Tooltip
```
import { Tooltip } from 'em-ui-library';

<Tooltip content="Info">
  <button>?</button>
</Tooltip>
```

---

## Organisms

## Dashboard
```
import { Dashboard } from 'em-ui-library';

const stats = [
  { id: 1, title: 'Users', value: 1500, icon: '👥' },
  { id: 2, title: 'Money', value: '450 000 $', icon: '💰' },
];

<Dashboard stats={stats} />
```

## Header
```
import { Header } from 'em-ui-library';

<Header title="Administration" />
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
    { id: 1, title: 'Log 1' },
    { id: 2, title: 'Log 2' },
  ]}
/>
```

## Login
```
import { Login } from 'em-ui-library';

<Login onSubmit={(data) => console.log('Login:', data)} />
```

## NotificationCenter
```
import { NotificationCenter } from 'em-ui-library';

const notifications = [
  { id: 1, type: 'success', message: 'Saved' },
  { id: 2, type: 'error', message: 'Server error' },
];

<NotificationCenter
  notifications={notifications}
  onDismiss={(id) => console.log('Closed', id)}
/>
```

## Register
```
import { Register } from 'em-ui-library';

<Register onSubmit={(data) => console.log('Registered:', data)} />
```

## SearchBar
```
import { SearchBar } from 'em-ui-library';

<SearchBar
  placeholder="Search user"
  onSearch={(query) => console.log('Search:', query)}
/>
```

## Sidebar
```
import { Sidebar } from 'em-ui-library';

<Sidebar
  items={[
    { id: 1, label: 'Dashboard' },
    { id: 2, label: 'Settings' },
  ]}
/>

```

## UserProfile
```
import { UserProfile } from 'em-ui-library';
import 'em-ui-library/dist/index.css';

function App() {
  const user = {
    name: 'Name Surname',
    email: 'example@example.com',
    avatar: 'https://i.pravatar.cc/80?u=jan' 
  };

  const handleEdit = () => {
    console.log('Edit profile');
  };

  const handleLogout = () => {
    console.log('Logout');
  };

  return (
    <UserProfile
      user={user}
      onEdit={handleEdit}
      onLogout={handleLogout}
    />
  );
}

export default App;

```

---

## Templates

## AuthLayout
```
import { AuthLayout } from 'em-ui-library';
import 'em-ui-library/dist/index.css';

function App() {
  return (
    <AuthLayout>
      <p>Please, login.</p>
      {/* Login form or other content */}
    </AuthLayout>
  );
}

export default App;
```

## DashboardLayout
```
import { DashboardLayout } from 'em-ui-library';
import 'em-ui-library/dist/index.css';

function App() {
  const user = { name: 'Name', email: 'example@example.com' };

  const handleLogout = () => {

  };

  return (
    <DashboardLayout user={user} onLogout={handleLogout}>
    </DashboardLayout>
  );
}

export default App;

```

## FormLayout
```
import React from 'react';
import { FormLayout } from 'em-ui-library';
import 'em-ui-library/dist/index.css';

function App() {
  return (
    <FormLayout title="Registrace" description="Fill credentials">
      <form>
        <div>
          <label htmlFor="email">E-mail</label><br />
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label><br />
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </FormLayout>
  );
}

export default App;

```

## ProfileLayout
```
import { ProfileLayout } from 'em-ui-library';

const user = {
  name: 'Name Surname',
  email: 'example@example.com',
  avatar: 'https://example.com/avatar.jpg',
};

const tabs = [
  { id: 1, label: 'Profile' },
  { id: 2, label: 'Settings' },
];

<ProfileLayout user={user} tabs={tabs}>
  <p>Profile</p>
</ProfileLayout>
```

## SettingsLayout
```
import { SettingsLayout } from 'em-ui-library';

<SettingsLayout>
  <h2>Account settings</h2>
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
- [Atoms](#atoms)


- [Molecules](#molecules)
  - [Accordion](#accordion)
  - [Avatar](#avatar)
  - [Badge](#badge)
  - [ButtonGroup](#buttongroup) 
  - [Card](#card)
  - [FormField](#formfield)
  - [Modal](#modal)
  - [Notification](#notification)
  - [Tabs](#tabs)
  - [Tooltip](#tooltip)

- [Organisms](#organisms)
  - [Dashboard](#dashboard)
  - [Header](#header)
  - [Footer](#footer)
  - [ListView](#listview) 
  - [Login](#login)
  - [NotificationCenter](#notificationcenter)
  - [Register](#register)
  - [SearchBar](#searchbar)
  - [Sidebar](#sidebar)
  - [UserProfile](#userprofile)

- [Templates](#templates)
  - [AuthLayout](#authlayout)
  - [DashboardLayout](#dashboardlayout)
  - [FormLayout](#formlayout)
  - [ProfileLayout](#profilelayout)
  - [SettingsLayout](#settingslayout)
---

## Instalace a použití

### Instalace knihovny do projektu

```bash

npm install em-ui-library
```

---

## Příklady použití komponentů v praxi

## Atoms 
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

## Molecules

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

## FormField
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

## Notification
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

## Organisms

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
import 'em-ui-library/dist/index.css';

function App() {
  const user = {
    name: 'Name Surname',
    email: 'example@example.com',
    avatar: 'https://i.pravatar.cc/80?u=jan' 
  };

  const handleEdit = () => {
    console.log('Edit profilu');
  };

  const handleLogout = () => {
    console.log('Odhlášeno');
  };

  return (
    <UserProfile
      user={user}
      onEdit={handleEdit}
      onLogout={handleLogout}
    />
  );
}

export default App;

```

---

## Templates

## AuthLayout
```
import { AuthLayout } from 'em-ui-library';
import 'em-ui-library/dist/index.css';

function App() {
  return (
    <AuthLayout>
      <p>Přihlašte se.</p>
      {/* Např. přihlašovací formulář */}
    </AuthLayout>
  );
}

export default App;
```

## DashboardLayout
```
import { DashboardLayout } from 'em-ui-library';
import 'em-ui-library/dist/index.css';

function App() {
  const user = { name: 'Name', email: 'example@example.com' };

  const handleLogout = () => {

  };

  return (
    <DashboardLayout user={user} onLogout={handleLogout}>
    </DashboardLayout>
  );
}

export default App;
```

## FormLayout
```
import React from 'react';
import { FormLayout } from 'em-ui-library';
import 'em-ui-library/dist/index.css';

function App() {
  return (
    <FormLayout title="Registrace" description="Zadejte prosím své údaje.">
      <form>
        <div>
          <label htmlFor="email">E-mail</label><br />
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Heslo</label><br />
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Registrovat</button>
      </form>
    </FormLayout>
  );
}

export default App;

```

## ProfileLayout
```
import { ProfileLayout } from 'em-ui-library';

const user = {
  name: 'Jméno přijmení',
  email: 'example@example.com',
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

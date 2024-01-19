# Admin Components

A collection of reusable React components for creating admin interfaces.

## License
Licensed under MIT. Totally free for private or commercial projects.

## Getting Started

### Install components

```bash
npm i @typedbootstrap/admin-styles @typedbootstrap/admin-components
```
### Include styles

```tsx
import '@typedbootstrap/admin-styles/dist/css/styles.css';
```

### Import components

```tsx
import React from 'react';
import { DashboardLayout } from '@typedbootstrap/admin-components';

export default (props) => {
    return ( 
        <DashboardLayout
            topnav={<div>Topnav</div>}
            sidenav={<div>Sidenav</div>}
            footer={<div>Topnav</div>}>
            Hello world!
        </DashboardLayout>
    );
};
```
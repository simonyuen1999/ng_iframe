## ng17 imports standalone component

> Is it correct?   For Angular 17 dynamic loading standalone component, that component must be imported from the same project or from project's node_modules directory.   Angular cannot import these components from other directory, otherwise Angular compiler will complain unknown component.

Yes, you are correct. In Angular 17, standalone components are self-contained and declare their own dependencies¹². They use the `imports` property in the component decorator to directly import other standalone components, directives, and pipes they depend on². 

However, **these components must be part of the same project or located in the project's `node_modules` directory** ¹². Angular's compiler needs to be aware of these components at compile time, and it looks for them in these locations. **If you try to import a component from another directory, the Angular compiler will not recognize it and will throw an error**¹².

Here is an example of how to import a standalone component:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-existing-component',
  template: `
    <div>
      <h1>This is an existing component</h1>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class ExistingComponent {
  // Your existing component code goes here
}
```
In this example, `CommonModule` is imported directly in the component's `imports` array⁵. This is a typical pattern for standalone components in Angular 17⁵. 

Please note that these are general guidelines and the exact implementation might vary based on the specifics of your applications. It's always a good idea to refer to the official Angular documentation or consult with a development expert when implementing these features.

Source: Conversation with Bing, 2024-02-24
(1) In standalone mode, how to I import a module in Angular 17?. https://stackoverflow.com/questions/77727305/in-standalone-mode-how-to-i-import-a-module-in-angular-17.
(2) importProvidersFrom([CommonModule] in Angular 17 Standalone Component. https://stackoverflow.com/questions/77791856/importprovidersfromcommonmodule-in-angular-17-standalone-component.
(3) Standalone Components in Angular: A Comprehensive Guide. https://deveasylearn.com/standalone-components-in-angular-a-comprehensive-guide/.
(4) Angular - Getting started with standalone components. https://angular.io/guide/standalone-components.
(5) What Are Standalone Components and How to Utilize Them in Angular .... https://medium.com/@mahmednisar/what-are-standalone-components-and-how-to-utilize-them-in-angular-848ad200e12b.
(6) undefined. https://angular.io/guide/frequent-ngmodules.
(7) undefined. https://angular.io/guide/feature-modules.
(8) undefined. https://github.com/angular/angular.io/issues/2166.

## Include NG into other page element

```html
<div id="gabriel-embed" style="min-height: 800px;">
<script src="https://embed.gabrielny.com/eshopreact.js?key=1d767b46-27e8-4b05-8abf-776514fc9771&division=fashion&noframe=1&attachTo=gabriel-embed&eager=1"> </script>
</div>
```

```html
document.getElementById("gabriel-embed").innerHTML=<object type="text/html" data="http://example.com"></object>
```



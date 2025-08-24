# Methods

Besides hooks, Guidr also exposes **methods** you can call directly on the global  
`window.guidr` object to control tours programmatically.

---

## Manually complete a step

**`completeStep(widgetId, stepId)`**

Marks a step as completed, just like if the user had triggered it themselves.  
This can be useful if you want to integrate Guidr with **custom app logic** or mark a step as done after an external action.

- **Parameters**
  - `widgetId` *(number)* — The ID of the widget instance.  
  - `stepId` *(string)* — The ID of the step to complete.  

::: tip Finding the Step ID
You can find the **Step ID** in the **Structure** tab of the widget editor.  
Open the step → scroll down to **Advanced settings → Custom Actions with Hooks**.  
![Where to find the Step ID](/images/guidr-find-step-id.png)
:::

- **Returns**  
  *(boolean)* — `true` if the step was successfully completed, `false` otherwise.  

- **Behavior**
  - Updates the UI (step is marked as completed, progress bar updated).  
  - Triggers the **`onStepComplete`** hook for this step.  
  - Fires `"step_completed"` and, if it was the last step, `"tour_completed"` events to analytics.  
  - Automatically moves focus to the next incomplete step, if any.  

### Examples

```js
// Complete a specific step by ID
const widgetId = 42;
const stepId = "f4487c9d-2027-4330-b4f8-63aeec0eb3b2";

const success = window.guidr.completeStep(widgetId, stepId);

if (success) {
  console.log(`Step ${stepId} marked as complete!`);
} else {
  console.warn("Could not complete the step. Check the IDs.");
}
```

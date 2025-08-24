# Event Hooks

Guidr exposes several event hooks that let you react to user actions inside the widget.  
All hooks are available on the global **`window.guidr`** object once the widget is loaded.

---

## When a step is completed

**`onStepComplete(stepId?, callback)`**

Fires whenever a step is completed.

- **Parameters**
  - `stepId` *(optional, string)* — run the callback only for this specific step. 
  - `callback(eventData)` *(function)* — function that will be called when a step is completed.

::: tip Tip: Finding the Step ID
You can find the **Step ID** in the **Structure** tab of the widget editor.  
Open the step → scroll down to **Custom Actions with Hooks**. 
![Where to find the Step ID](/images/guidr-find-step-id.png)
:::

- **Response eventData**
  - `widgetId` — the ID of the widget instance  
  - `stepId` — the ID of the completed step  
  - `stepData` — metadata of the step  
  - `isLastStep` — `true` if it was the final step in the tour  
  - `timestamp` — JavaScript `Date`

- **Examples**
```js
// Run for all steps
window.guidr.onStepComplete((data) => {
  console.log("Step completed:", data.stepId);
});

// Run only for a specific step
window.guidr.onStepComplete("step-123", (data) => {
  alert("Step 123 completed!");
});
```

## When a CTA button is clicked

**`onStepButtonClick(stepId?, callback)`**

Use this hook to run code whenever a CTA button inside a step is clicked.

::: warning Important
For this hook to work, the step’s button must be set to  
**“Custom Function”** under *How should the button work?* in the step configuration.  

Otherwise, the event will not be triggered.

![Where to configure the button to type Custom Function](/images/guidr-button-must-be-of-type-function.png)
:::

- **Parameters**  
  - `stepId` *(optional, string)* — filter for a specific step.  
  - `callback(eventData)` *(function)* — called when the CTA button is clicked.  

- **eventData**  
  - `widgetId` — the ID of the widget instance  
  - `stepId` — the ID of the step whose button was clicked  
  - `stepData` — metadata of the step  
  - `event` — the raw DOM click event  
  - `timestamp` — JavaScript `Date`

### Examples

```js
// Run for all CTA buttons
window.guidr.onStepButtonClick((data) => {
  console.log("CTA clicked in step:", data.stepId);
});

// Run only for a specific step
window.guidr.onStepButtonClick("f4487c9d-2027-4330-b4f8-63aeec0eb3b2", (data) => {
  myAnalytics.track("Special CTA Click", data);
});
```

## When a step is opened

**`onStepClick(stepId?, callback)`**

Fires whenever a step inside the widget is **opened (clicked)**.  
You can either listen for **all steps** or just a **specific step**.

- **Parameters**  
  - `stepId` *(optional, string)* — run the callback only for this specific step.  
  - `callback(eventData)` *(function)* — function that will be called when a step is opened.  

- **Response eventData**
  - `widgetId` — the ID of the widget instance  
  - `stepId` — the ID of the opened step  
  - `stepData` — metadata of the step  
  - `event` — the raw click event object  
  - `timestamp` — JavaScript `Date`

### Examples

```js
// Run for all steps
window.guidr.onStepClick((data) => {
  console.log("Step opened:", data.stepId);
});

// Run only for a specific step
window.guidr.onStepClick("f4487c9d-2027-4330-b4f8-63aeec0eb3b2", (data) => {
  myAnalytics.track("Step opened", data);
});

# Event Hooks

Guidr exposes several event hooks that let you react to user actions inside the widget.  
All hooks are available on the global **`window.guidr`** object through the **`.on()`** method once the widget is loaded.

An additional **`.once()`** method is provided. It accepts the same arguments as **`.on()`**, but attached callbacks are executed once and then removed from the list of listeners.

It's possible to unsubscribe a listener by calling the **`.off()`** method passing two arguments:

- `event type` _(string)_ — the event type to unsubscribe a listener from.
- `callback` _(function)_ — the callback function that was passed to the `.on()` or `once()` methods.

---

## When a step is completed

**`on("step-complete", callback)`**

Fires whenever a step is completed.

- **Parameters**

  - `"step-complete"` _(string)_ — the event type to listen.
  - `callback(eventData)` _(function)_ — function that will be called when a step is completed.

- **Response eventData**

  - `widgetId` _(number)_ — the ID of the widget instance
  - `stepId` _(string)_ — the ID of the completed step
  - `stepData` _(object)_ — metadata of the step
  - `isLastStep` _(boolean)_ — `true` if it was the final step in the tour
  - `timestamp` _(number)_ — current time in ms

- **Examples**

```js
// Run for all steps
window.guidr.on("step-complete", (data) => {
  console.log("Step completed:", data.stepId);
});

// Filter for specific step
window.guidr.on("step-complete", (data) => {
  if (data.stepId === "<your-id>") {
    console.log("Step completed:", data.stepId);
  }
});
```

::: tip Tip: Finding the Step ID
You can find the **Step ID** in the **Structure** tab of the widget editor.  
Open the step → scroll down to **Custom Actions with Hooks**.
![Where to find the Step ID](/images/guidr-find-step-id.png)
:::

## When a CTA button is clicked

**`on("step-button-click", callback)`**

Use this hook to run code whenever a CTA button inside a step is clicked.

::: warning Important
For this hook to work, the step’s button must be set to  
**“Custom Function”** under _How should the button work?_ in the step configuration.

Otherwise, the event will not be triggered.

![Where to configure the button to type Custom Function](/images/guidr-button-must-be-of-type-function.png)
:::

- **Parameters**

  - `"step-button-click"` _(string)_ — the event type to listen.
  - `callback(eventData)` _(function)_ — called when the CTA button is clicked.

- **eventData**
  - `widgetId` _(number)_ — the ID of the widget instance
  - `stepId` _(string)_ — the ID of the step whose button was clicked
  - `stepData` _(object)_ — metadata of the step
  - `event` _(object)_ — the raw DOM click event
  - `timestamp` _(number)_ — current time in ms

### Examples

```js
// Run for all CTA buttons
window.guidr.on("step-button-click", (data) => {
  console.log("CTA clicked in step:", data.stepId);
});

// Filter for specific step
window.guidr.on("step-button-click", (data) => {
  if (data.stepId === "<your-id>") {
    myAnalytics.track("Special CTA Click", data);
  }
});
```

## When a step is opened

**`on("step-click", callback)`**

Fires whenever a step inside the widget is **opened (clicked)**.  
You can either listen for **all steps** or just a **specific step**.

- **Parameters**

  - `"step-click"` _(string)_ — the event type to listen.
  - `callback(eventData)` _(function)_ — function that will be called when a step is opened.

- **Response eventData**
  - `widgetId` _(number)_ — the ID of the widget instance
  - `stepId` _(string)_ — the ID of the opened step
  - `stepData` _(object)_ — metadata of the step
  - `event` _(object)_ — the raw click event object
  - `timestamp` _(number)_ — current time in ms.

### Examples

```js
// Run for all steps
window.guidr.on("step-click", (data) => {
  console.log("Step opened:", data.stepId);
});

// Filter for specific step
window.guidr.on("step-click", (data) => {
  if (data.stepId === "<your-id>") {
    myAnalytics.track("Step opened", data);
  }
});
```

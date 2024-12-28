What is Event Delegation?
In JavaScript, events bubble up from the target element to its ancestors in the DOM. Instead of attaching event 
listeners to every individual element (which can be inefficient), you can attach a single event listener to a parent
element that listens for events on its child elements. When an event occurs, the parent can determine which child
element triggered the event.
Benefits of Event Delegation
Efficiency: By reducing the number of event listeners, you lower memory usage and improve performance, particularly when dealing with many child elements.

Dynamic Content Handling: When new child elements are added to the parent, they automatically inherit the event handling, 
eliminating the need to add new listeners.

Simplified Code: The code can be cleaner and more manageable since you handle events in one place.

Considerations
Event Propagation: Ensure that your events are appropriately managed. Sometimes, it may be necessary to stop event propagation if needed.

Performance: If you have many child elements, consider only delegating to specific types of elements (e.g., only li elements 
in a list) to avoid unnecessary checks.

Event Targeting: Be mindful of how you determine the target of the event. Using event.target can be more specific, but you 
might need to use event.currentTarget if you’re interested in the listener's element rather than where the event originated.

Use Cases
Handling Clicks on Lists: As shown in the example, this is common with lists or tables where items can be dynamic.

Form Elements: You can delegate change events for multiple input elements to a single parent form.

Complex UI Components: In components where elements are frequently added/removed, such as in applications with tabs or modals.

// document.querySelector("#category").addEventListener("click", (e) => {
//    console.log(e.target.id);
//   window.location.href = "/" + e.target.id;
// });

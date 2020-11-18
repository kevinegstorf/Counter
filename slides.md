---
marp: true
---

# Creating Abstractions in React

## Compound Components FTW 🏆

---

## Het doel van een Abstractie.

is om het leven makkelijker te maken van je toekomstige zelf, collega, dan wel iemand die je prachtige code gaat overnemen.

---

component vol stoppen met props om het zo flexibel mogelijk te maken...

---

component vol stoppen met props om het zo flexibel mogelijk te maken...

- dat is op een gegeven moment niet meer houdbaar en irritant om steeds up te daten.

---

## Inversion of Control

---

compound components

- When multiple components work together to have a shared state and handle logic together, they are called compound components.

---

verschillende manieren om compount components te maken

- React.cloneElement, React.Children.map
  - niet handig wanneer er andere html elementen tussen de compound component onderdelen zitten
- met useContext
  - hiermee kan je wel helemaal los gaan met html tussen de onderdelen van de compound component

https://codesandbox.io/s/modern-dust-s6qnm

---

Demo Time

---

## Questions?

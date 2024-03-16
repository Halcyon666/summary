# Basic React





## Updating a nested object

![image-20240316143630557](https://s2.loli.net/2024/03/16/w28sMUSyG9NIXDV.png)

```typescript
const nextArtwork = { ...person.artwork, city: 'New Delhi' };
const nextPerson = { ...person, artwork: nextArtwork };
setPerson(nextPerson);
```

## Dynamic call a function or update a value 

```typescript
  for (let update of queue) {
    if (typeof update === 'function') {
      // Apply the updater function.
      finalState = update(finalState);
    } else {
      // Replace the next state.
      finalState = update;
    }
  }
```


# [Hatchways Times](https://hatchwaytimes.netlify.app/)

[Hatchways Times](https://hatchwaytimes.netlify.app/) is a dummy website that lists blog posts. All data is located in `src/data/blogs.json` file and loaded directly into client without a server.

Example blog post data:

```json
{
  "id": 1,
  "author": "Esmeralda Vanne",
  "title": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  "excerpt": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "date": "1634439025000",
  "image": "http://dummyimage.com/200x134.png/cc0000/ffffff",
  "readingTimeMinutes": 9,
  "tags": ["crypto", "health"]
}
```

# Getting Started

- System requirements
  - Node.JS v14
- Install dependencies
  ```
  yarn
  ```
- Start client
  ```
  yarn start
  ```
  
# Verify That Everything Is Set Up Correctly

If your application is running correctly, you should be able to access it from your browser by going to [http://localhost:3000/](http://localhost:3000/).
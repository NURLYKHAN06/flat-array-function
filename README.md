Expand function to matrix arrays.

Before:
```javascript
[
  {
    label: 1,
  },
  {
    label: 2,
    nodes: [
      {
        label: 3,
        nodes: [
          {
            label: 4,
            nodes: [
              {
                label: 6
              }
            ]
          }, 
          {
            label: 5
          }
        ]
      }
    ]
  },
  {
    label: 7
  },
  {
    label: 8,
    nodes: [
      {
        label: 10,
        nodes: [
          {
            label: 11
          }
        ]
      }
    ]
  },
  {
    label: 9
  }
]
```


After: ```
javascript
 [
  {
    label:1
  },
  {
    label:6
  },
  {
    label:4
  },
  {
    label:5
  },
  {
    label:3
  },
  {
    label:2
  },
  {
    label:7
  },
  {
    label:11
  },
  {
    label:10
  },
  {
    label:8
  },
  {
    label:9
  }
]
```

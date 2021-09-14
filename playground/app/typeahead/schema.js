export default {
  schema: {
    title: "Root",
    type: "object",
    properties: {
      str: {
        title: "String",
        type: "string"
      },
      strArr: {
        title: "StringArray",
        type: "array",
        items: {
          type: "string"
        }
      },
      obj: {
        title: "Object",
        type: "object",
        properties: {
          name: { type: "string" }
        }
      },
      objArr: {
        title: "ObjectArray",
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" }
          }
        }
      },
      compArr: {
        title: "CompositeObjectArray",
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" }
          }
        }
      }
    }
  }
};

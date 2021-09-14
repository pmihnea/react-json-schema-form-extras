let schema = {
  type: "object",
  required: ["PayoutGroupRefId"],
  properties: {
    PayoutGroups: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          id: {
            type: "string",
            title: "Id"
          },
          PayoutGroupName: {
            type: "string",
            title: "Payout Group Name"
          }
        }
      },
      title: "Payout Groups"
    },
    PayoutGroupRefId: {
      type: "string",
      title: "Payout Group Reference Id"
    }
  }
};

let uiSchema = {
  PayoutGroups: {
    items: {
      "ui:title": "PayoutGroup",
      "ui:field": "collapsible",
      collapse: {
        field: "ObjectField",
        separate: false,
        additionalTitleField: "PayoutGroupName"
      }
    }
  },
  PayoutGroupRefId: {
    "ui:field": "typeahead",
    typeahead: {
      placeholder: "Search Payout Groups ...",
      options: [{ id: "A", label: "Alex" }, { id: "B", label: "Bart" }],
      minLength: 2
    }
  }
};

const formData = {
  PayoutGroups: [
    {
      id: "id1",
      PayoutGroupName: "PG-Name-1"
    }
  ]
};
export default { schema, uiSchema, formData };
/*
,
  PayoutGroupRefId: {
    "ui:field": "typeahead",
    typeahead: {
      placeholder: "Search Payout Groups...",
      options: [{ id: "A", label: "Alex" }, { id: "B", label: "Bart" }],
      minLength: 2
    }
  }
 */

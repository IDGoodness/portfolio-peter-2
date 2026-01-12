export const base44 = {
  entities: {
    ContactMessage: {
      async create(data) {
        // Stub: emulate async creation (replace with real client integration)
        console.log("[base44] create ContactMessage", data);
        return Promise.resolve({ ok: true, data });
      },
    },
  },
};

export default base44;

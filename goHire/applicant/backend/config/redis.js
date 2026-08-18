// Redis caching disabled
const redis = {
  on: () => {},
  get: async () => null,
  set: async () => null,
  del: async () => null,
  keys: async () => [],
  quit: async () => null,
  connect: async () => null
};

module.exports = redis;
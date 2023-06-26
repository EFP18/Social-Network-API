const { Schema, model } = require("mongoose");

const thoughtsSchema = new mongoose.Schema(
  {
    // thoughtsId: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId(),
    // },

    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
userSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Initialize our Thought model
const Thought = model("thought", thoughtsSchema);

module.exports = Thought;

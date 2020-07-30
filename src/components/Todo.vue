<template>
  <div class="todo">
    <ul>
      <li v-for="item in items" :key="item.index">
        <label :class="{ checked: item.isChecked }">
          <input type="checkbox" v-model="item.isChecked" /> {{ item.title }}
        </label>
      </li>
    </ul>
    <div>
      <input
        type="text"
        placeholder="タスクを入力してみよう"
        v-model="newItemTitle"
      />
    </div>
    <div>
      <button @click="addTodo(newItemTitle)">タスクを追加する</button>
      <button @click="deleteTodo(newItemTitle)">
        チェックをつけたタスクを削除する
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data: function() {
    return {
      items: [
        {
          title: "夕飯の材料を買いに行く",
          isChecked: false,
        },
        {
          title: "お風呂の掃除をする",
          isChecked: true,
        },
        {
          title: "ゴミ出しをする",
          isChecked: false,
        },
      ],
      newItemTitle: "",
    };
  },
  methods: {
    addTodo(newTitle) {
      let item = {
        title: newTitle,
        isChecked: false,
      };
      this.items.push(item);
      this.newItemTitle = "";
    },
    deleteTodo() {
      this.items = this.items.filter((item) => {
        return item.isChecked == false;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

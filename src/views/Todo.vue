<template>
  <div class="todo">
    <b-card-group deck>
      <b-card header="Card with list group">
        <b-list-group>
          <b-list-group-item v-for="item in items" :key="item.index">
            <label :class="{ checked: item.isChecked }">
              <input type="checkbox" v-model="item.isChecked" />
              {{ item.title }}
            </label>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
    <div>
      <b-input
        type="text"
        placeholder="タスクを入力してみよう"
        v-model="newItemTitle"
      />
    </div>
    <div>
      <b-button @click="addTodo(newItemTitle)" variant="outline-primary">
        タスクを追加する
      </b-button>
      <b-button @click="deleteTodo(newItemTitle)" variant="outline-primary">
        チェックをつけたタスクを削除する
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDo",
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

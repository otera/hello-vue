<template>
  <div class="row">
    <div class="col-8">
      <h3>Draggable table</h3>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th rowspan="2">Check</th>
            <draggable
              v-model="headers"
              :options="{ handle: '.item-handle' }"
              @end="draggableEnd"
            >
              <th v-for="header in headers" :key="header.key" scope="col">
                <span class="item-handle">::</span>
                {{ header.name }}
              </th>
            </draggable>
          </tr>
          <tr>
            <th v-for="header2 in headersSecond" :key="header2.key">
              <input
                type="text"
                :name="header2.key"
                :placeholder="header2.name"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.name">
            <td><input type="checkbox" /></td>
            <td v-for="header in headers" :key="header.key">
              {{ item[header.key] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "Drag",
  methods: {
    draggableEnd(event) {
      // ドラッグ後のデータ順を確認
      console.log(event);
      this.headers.forEach((data, index) => {
        console.log("index:" + index, data.key, data.name);
      });
    },
  },
  components: {
    draggable,
  },
  data() {
    return {
      headers: [
        { key: "id", name: "ID" },
        { key: "name", name: "名前" },
        { key: "sport", name: "スポーツ" },
      ],
      headersSecond: [
        { key: "id", name: "ID" },
        { key: "name", name: "名前" },
        { key: "sport", name: "スポーツ" },
      ],
      list: [
        { id: 1, name: "Abby", sport: "basket" },
        { id: 2, name: "Brooke", sport: "foot" },
        { id: 3, name: "Courtenay", sport: "volley" },
        { id: 4, name: "David", sport: "rugby" },
      ],
      dragging: false,
    };
  },
};
</script>

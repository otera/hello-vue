<template>
  <div>
    <b-overlay :show="isBusy" no-wrap fixed z-index="1100"></b-overlay>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Change Modal"
      @show="showInit"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">Old Name</th>
            <th scope="col">New Name</th>
          </tr>
        </thead>
        <draggable
          v-model="tableData"
          :options="{ handle: '.item-handle' }"
          tag="tbody"
        >
          <tr v-for="item in tableData" :key="item.name">
            <td scope="row"><span class="item-handle">::</span></td>
            <td>{{ item.name }}</td>
            <td><b-form-input type="text" v-model="item.newName" /></td>
          </tr>
        </draggable>
      </table>
    </b-modal>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "ModalComponent",
  props: {
    /** 送信リクエスト先 */
    requrl: {
      type: String,
      required: true
    },
    /** テーブル表示用データ */
    items: Array,
    /** 親の関数を呼ぶ */
    change: Function
  },
  created() {
    console.log(this);
  },
  components: {
    draggable
  },
  data() {
    return {
      name: "",
      nameState: null,
      /** 初期表示時：テーブルデータ */
      initTableData: [],
      /** テーブルデータ */
      tableData: [],
      /** Overlay */
      isBusy: false
    };
  },
  methods: {
    /** 表示時に呼びたい */
    showInit() {
      // データを作り直す
      this.tableData = [];
      this.items.forEach(data => {
        this.tableData.push({ name: data.name, newName: "" });
      });
      // 初期表示状態のデータを持っておく
      this.initTableData = this.tableData.slice();
    },
    /** hiddenされた時 */
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    /** デフォルトのOKボタンが押下された */
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();

      // Overlayの表示
      if (!this.isBusy) {
        this.isBusy = true;
        // Mock API call
        setTimeout(() => {
          this.isBusy = false;

          // Trigger submit handler
          this.handleSubmit();
        }, 2500);
      }
    },
    /** トリガー送信 */
    handleSubmit() {
      this.tableData.forEach((data, index) => {
        // new name check
        const nname = data.newName.trim();
        if (nname.length === 0) {
          console.log("name is not updated");
        }

        console.log(index, data);
      });

      console.log("initTableData", this.initTableData);

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });

      // 親の関数を呼ぶ
      this.change(this.tableData);
      this.$emit("emitChange", this.tableData);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-handle {
  font-size: 20px;
}
</style>

<template>
  <div>
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <el-form-item label="多语言"  prop="language">
        <el-select
          @change="handleChange"
          v-model="form.language"
          filterable
          allow-create
          default-first-option
          placeholder="请选择语言">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名字"   prop="name">
        <el-input
          placeholder="请输入名称"
          suffix-icon="el-icon-more-outline"
          v-model="form.name" >
        </el-input>
      </el-form-item>
      <el-form-item label="介绍">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入介绍"
            v-model="form.description">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button-group>
          <el-button size="mini" type="primary" icon="el-icon-check"  @click="submitForm('form')" >提交</el-button>
          <el-button size="mini" type="primary"  icon="el-icon-delete"  @click="remove()">删除</el-button>
        </el-button-group>
        
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getVerse } from '@/api/v1/verse'
import { postMultilanguageVerse, putMultilanguageVerse, deleteMultilanguageVerse } from '@/api/v1/multilanguage-verse'
export default {
  name: 'Language',
  props: {
    languages: {
      type: Array,
      required: true
    },
    verse_id: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.multilanguage = this.languages;
    this.reload();
  },
  methods: {
    async refresh() {
      const res = await getVerse(
        this.verse_id,
        'languages'
      )
      this.multilanguage = res.data.languages;
      this.reload();
    },
    reload() { 

      if (this.multilanguage.length !== 0) {
        this.options = this.multilanguage.map((item) => {
          return {
            value: item.language,
            label: item.language
          }
        });
          
        if (!this.form.language || this.multilanguage.find(item => item.language === this.form.language) === undefined) {
          this.form.language = this.multilanguage[0].language;
        }
        this.handleChange(this.form.language);
      }
    },
    handleChange(value) { 
      this.form.name = '';
      this.form.description = '';
      this.multilanguage.forEach((item) => {
        if (item.language === value) {
          this.form.name = item.name;
          this.form.description = item.description;
        }
      });
    },
    remove() { 
      
      this.multilanguage.forEach((item) => {
        if (item.language === this.form.language) {
          deleteMultilanguageVerse(item.id).then(async (response) => {
            console.log(response);
            await this.refresh();
          }).catch((error) => {
            console.log(error);
          });
        }
      });
      console.log('remove');
    },
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const language = this.multilanguage.find(item => item.language === this.form.language);
          if(language !== undefined) {
              putMultilanguageVerse(language.id, {
                name: this.form.name,
                description: this.form.description
              }).then(async (response) => {
                console.log(response);
                await this.refresh();
              }).catch((error) => {
                console.log(error);
              });
          } else { 
            postMultilanguageVerse({
              verse_id: this.verse_id,
              language: this.form.language,
              name: this.form.name,
              description: this.form.description
            }).then(async (response) => {
              const data = response.data;

              console.log(response);

              await this.refresh();
            }).catch((error) => {
              console.log(error);
            });
          }
          console.log('submit!');
        } else {
          console.error('error submit!!');
          return false;
        }
      });
    }
  },
  data() {
    return {
      multilanguage: {},
      form: {
        language: '',
        name: '',
        description: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
        ],
        language: [
          { required: true, message: '请输入语言', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ]
      },
      options: [{
        value: 'zh',
        label: 'zh'
      }]
    }
  }
}
</script>
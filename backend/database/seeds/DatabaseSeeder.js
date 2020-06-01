'use strict'

const Ug = use('App/Models/Ug')
const Role = use('Adonis/Acl/Role')
const User = use('App/Models/User')
const Department = use('App/Models/Department')

class DatabaseSeeder {
  async run () {
    /* UGs */
    const sefin = await Ug.create({
      code: '140001',
      name: 'SECRETARIA DE ESTADO DE FINANCAS'
    })

    const ale = await Ug.create({
      code: '010001',
      name: 'ASSEMBLEIA LEGISLATIVA'
    })

    /* DEPARTMENTS */
    const dgsc = await Department.create({
      slug: 'DGSC',
      name: 'Diretoria de Gestão de Sistemas Contábeis'
    })

    await Department.create({
      slug: 'DCC',
      name: 'Diretoria Central de Contabilidade'
    })

    await Department.create({
      slug: 'DNAF',
      name: 'Diretoria de Normatização e Acompanhamento Fiscal'
    })

    /* ROLES */
    const administrator = await Role.create({
      slug: 'administrator',
      name: 'Administrador'
    })

    const allocator = await Role.create({
      slug: 'allocator',
      name: 'Alocador'
    })

    const department_manager = await Role.create({
      slug: 'department_manager',
      name: 'Gestor de Departamento'
    })

    const attendant = await Role.create({
      slug: 'attendant',
      name: 'Atendente'
    })

    const normal = await Role.create({
      slug: 'normal',
      name: 'Normal'
    })

    /* ADMINISTRATOR */
    const neilton = await User.create({
      name: 'Neilton Barbosa',
      nickname: 'Neilton',
      cpf: '019.395.532-61',
      email: 'neilton.barbosa@sefin.ro.gov.br',
      password: '1234',
      department_id: dgsc.id,
      ug_id: sefin.id
    })

    /* ALLOCATOR */
    const carolina = await User.create({
      name: 'Carolina Dias',
      nickname: 'Carolina',
      cpf: '256.775.091-67',
      email: 'carolina.dias@sefin.ro.gov.br',
      password: '1234',
      ug_id: sefin.id
    })

    /* DEPARTMENT MANAGER */
    const elias = await User.create({
      name: 'Elias Campos',
      nickname: 'Elias',
      cpf: '460.456.968-16',
      email: 'elias.campos@sefin.ro.gov.br',
      password: '1234',
      department_id: dgsc.id,
      ug_id: sefin.id
    })

    /* ATTENDANT */
    const carlos = await User.create({
      name: 'Carlos Augusto',
      nickname: 'Carlos',
      cpf: '500.784.186-23',
      email: 'carlos.augusto@sefin.ro.gov.br',
      password: '1234',
      department_id: dgsc.id,
      ug_id: sefin.id
    })

    /* NORMAL */
    const igor = await User.create({
      name: 'Igor Rezende',
      nickname: 'Igor',
      cpf: '862.660.857-80',
      email: 'igor.rezende@ale.ro.gov.br',
      password: '1234',
      ug_id: ale.id
    })

    await neilton.roles().attach(administrator.id)
    await carolina.roles().attach(allocator.id)
    await elias.roles().attach(department_manager.id)
    await carlos.roles().attach(attendant.id)
    await igor.roles().attach(normal.id)
  }
}

module.exports = DatabaseSeeder

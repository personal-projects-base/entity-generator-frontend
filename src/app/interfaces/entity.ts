export class EntityGenerator {
    mainPackage: string = ""
    language: string = ""
    projectName: string = ""
    entities: Entity[] = []
    endpoints: Endpoint[] = []

  }
  
  export class Entity {
    entityName: string  = ""
    tableName: string  = ""
    entityFields: EntityField[] = []
    classExtends?: string  = ""
    generateDefaultHandlers: boolean = false
  }
  
  export class EntityField {
    comment: string  = ""
    fieldName: string  = ""
    fieldProperties: FieldProperties = new FieldProperties()
    metadata: Metadata = new Metadata()
    relationShips: RelationShips = new RelationShips()
    list?: boolean
    frontendProperties: FrontendProperties = new FrontendProperties()
  }
  
  export class FieldProperties {
    fieldType: string  = ""
    required: boolean = false
    valueDefault: string  = ""
  }
  
  export class Metadata {
    nullable: boolean = false
    key: boolean = false
  }
  
  export class RelationShips {
    fetchType: string  = ""
    relationShip: string  = ""
    bidirectional?: boolean = false
  }
  
  export class Endpoint {
    methodName: string  = ""
    httpMethod: string  = ""
    grouper: string  = ""
    metadata: Metadata2 = new Metadata2()
    anonymous?: boolean
  }
  
  export class Metadata2 {
    input: Input[] = []
    output: Output[] = []
    anonymous?: boolean = false
  }
  
  export class Input {
    parameterName: string  = ""
    parameterType: string  = ""
    list: boolean = false
  }
  
  export class Output {
    parameterName: string  = ""
    parameterType: string  = ""
    list: boolean = false
  }
  
export class FrontendProperties {
  label: string = ""
  size: number = 0
  hidden: boolean = false
  order: any = 0
  guidance: string = ""
  reference: string = ""
  enableFieldsFilter: boolean = false
}

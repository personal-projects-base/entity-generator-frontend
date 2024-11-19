export class EntityGenerator {
    mainPackage: string = ""
    language: string = ""
    projectName: string = ""
    entities: Entity[] = []
    endpoints: Endpoint[] = []
    enums: Enums[] = []

  }

  export class Enums {
    enumName: string = "enumName";
    values: string[] = [];
  }
  
  export class Entity {
    entityName: string  = "entityName"
    tableName: string  = ""
    generateDefaultHandlers: boolean = false
    handlerAbstract: boolean = false
    entityFields: EntityField[] = []
    classExtends?: string  = ""

  }
  
  export class EntityField {
    comment: string  = ""
    fieldName: string  = ""
    list: boolean = false
    fieldProperties: FieldProperties = new FieldProperties()
    metadata: Metadata = new Metadata()
    relationShips: RelationShips = new RelationShips()
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
    mappedBy: string  = ""
    bidirectional: boolean = false
    reference: boolean = false
  }
  
  export class Endpoint {
    methodName: string  = " EndPointName"
    httpMethod: string  = ""
    grouper: string  = ""
    metadata: Metadata2 = new Metadata2()
  }
  
  export class Metadata2 {
    anonymous: boolean = false
    input: Input[] = []
    output: Output[] = []
   
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

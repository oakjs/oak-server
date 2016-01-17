
Storage of Oak projects will be entirely file-system-based (not 100% sure we'll carry that all the way up globally, but at least from the organization on down). The basic hierarchy is:

```
  organization-id/
    project-id1/
    project-id2/
      components/
        ComponentName1/
          [info.json]
        ComponentName2/
      stacks/
        stackname1/
          info.json
          data.json
          cards/
          components/
        stackname2/
      info.json
      data.json


```

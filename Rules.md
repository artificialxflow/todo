# Project Rules

## Core Principles
1. Keep it simple and maintainable
2. Document decisions and changes
3. Follow security best practices
4. Test thoroughly
5. Maintain clean code

## Version Control
- Initialize Git when appropriate
- Use meaningful commit messages
- Follow GitFlow for branches
- Never commit sensitive data
- Keep .gitignore updated
- Always ignore:
  - tasks.md
  - Rules.md
  - .env files
  - node_modules
  - build artifacts
  - IDE specific files

## API Documentation & Testing
- Maintain Postman collection for all APIs
- Keep collection updated with every API change
- Include example requests and responses
- Document authentication requirements
- Include environment variables setup
- Structure collection by feature/module
- Add request/response examples
- Include error scenarios
- Document rate limits if any

## Styling
- Choose approach based on needs:
  - Bootstrap: Rapid development, responsive design, component library
  - CSS Modules: Custom design systems
  - Styled-components: Component-based styling
  - Plain CSS: Minimal needs
- Document chosen approach
- Maintain consistency
- Follow Bootstrap best practices:
  - Use Bootstrap's grid system
  - Leverage Bootstrap components
  - Customize through SCSS variables
  - Maintain responsive design

## Database
- Choose MongoDB approach:
  - Mongoose: Schema validation, relationships, middleware
  - Native Driver: Performance, flexibility, direct control
- Secure connections
- Validate data
- Optimize queries
- Handle errors properly

## Docker
- Use multi-stage builds
- Implement .dockerignore
- Use environment variables
- Follow security practices
- Document configurations

## Testing
- Test at each phase
- Include unit, integration, and end-to-end tests
- Test security features
- Document test procedures
- Include Postman collection tests
- Automate API testing where possible

## Documentation
- Keep README.md updated
- Document major decisions
- Maintain API documentation
- Update as changes occur
- Keep Postman collection current

## Security
- Use environment variables
- Implement proper authentication
- Follow least privilege principle
- Regular security updates
- Monitor for vulnerabilities

## Error Handling
- Implement proper logging
- Create recovery procedures
- Document error patterns
- Monitor system health

## Project Structure
```
project/
├── app/
├── components/
├── public/
├── styles/
│   ├── custom.scss    # Custom Bootstrap overrides
│   └── variables.scss # Bootstrap variable overrides
├── tests/
├── docs/
├── postman/
│   ├── collection.json    # Main Postman collection
│   └── environment.json   # Postman environment variables
├── Rules.md
├── tasks.md
├── README.md
└── package.json
``` 
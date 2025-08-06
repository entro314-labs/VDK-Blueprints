---
id: "api"
name: "API Endpoint Generator"
description: "Generate complete API endpoints with implementation, tests, documentation, and security for multi-language frameworks"
target: "claude-code"
commandType: "custom-slash"
version: "1.0.0"
scope: "project"

# === Claude Code Specific Configuration ===
claudeCode:
  slashCommand: "/api"
  arguments:
    supports: true
    placeholder: "$ARGUMENTS"
    examples: ["user authentication", "order management --rest", "--grpc notifications", "graphql users"]
  fileReferences:
    supports: true
    autoInclude: ["CLAUDE.md", "openapi.yaml", "*.proto", "schema.graphql"]
  bashCommands:
    supports: true
    commands: ["mvn", "gradle", "go", "cargo", "npm", "deno"]
  mcpIntegration:
    requiredServers: []
    optionalServers: ["github"]
  memoryFiles: ["CLAUDE.md"]

# === Permissions ===
permissions:
  allowedTools: ["Read", "Write", "MultiEdit", "Bash(build:*)", "Bash(test:*)", "Grep", "Glob"]
  requiredApproval: false

# === Examples ===
examples:
  - usage: "/api user authentication --rest"
    description: "Generate complete REST API for user authentication with JWT tokens"
    context: "Building authentication system for web application"
    expectedOutcome: "Full endpoint implementation with validation, security, tests, and OpenAPI documentation"
  - usage: "/api order management --grpc"
    description: "Create gRPC service for order management with protocol buffers"
    context: "Microservice communication requiring high performance"
    expectedOutcome: "gRPC service definition, implementation, client code, and documentation"
  - usage: "/api analytics dashboard --graphql"
    description: "Generate GraphQL API for analytics data with resolvers and schema"
    context: "Flexible data querying for dashboard frontend"
    expectedOutcome: "GraphQL schema, resolvers, subscriptions, and playground setup"

# === Installation ===
installation:
  dependencies: ["framework-specific tools"]
  setupSteps:
    - "Install language-specific build tools (Maven, Go, Cargo, npm)"
    - "Set up API testing tools (Postman, Insomnia, curl)"
    - "Configure database and authentication dependencies"

# === Metadata ===
category: "development"
tags: ["api", "rest", "grpc", "graphql", "endpoints", "backend"]
author: "VDK"
lastUpdated: "2025-07-05"
compatibilityNotes: "Supports Java, Go, Rust, Node.js, Python frameworks with multiple API patterns"
---

# API Endpoint Generator

## Purpose

Generate complete API endpoints with implementation, comprehensive testing, security measures, and documentation for multiple frameworks and API patterns. Handles REST, gRPC, and GraphQL with proper authentication, validation, and best practices.

## Claude Code Integration

### Slash Command Usage

```
/api <description> [--type] [--framework]
```

**API Types:**
- `--rest` - RESTful HTTP APIs with JSON (default)
- `--grpc` - gRPC services with Protocol Buffers
- `--graphql` - GraphQL APIs with schema and resolvers
- `--websocket` - Real-time WebSocket APIs

**Framework Detection:**
Automatically detects and supports:
- **Java**: Spring Boot, Quarkus, JAX-RS
- **Go**: ConnectRPC, Gin, Echo, Fiber
- **Rust**: Axum, Actix-web, Rocket
- **Node.js**: Express, Fastify, Hapi
- **Python**: FastAPI, Django REST, Flask

### Automatic Project Analysis

The command analyzes project structure and frameworks:

**Framework Detection**: !`find . -name "pom.xml" -o -name "go.mod" -o -name "Cargo.toml" -o -name "package.json" | head -5`

**Existing APIs**: !`find . -name "*.proto" -o -name "openapi.yaml" -o -name "schema.graphql" | head -5`

**Auth Patterns**: !`grep -r "JWT\|OAuth\|Bearer" --include="*.java" --include="*.go" --include="*.rs" . | head -5`

**API Versioning**: !`grep -r "/v[0-9]\|/api/v" --include="*.java" --include="*.go" --include="*.rs" . | head -5`

2. Design endpoint:
   - Determine HTTP method (GET, POST, PUT, DELETE, PATCH)
   - Design RESTful URL path following conventions
   - Define request parameters (path, query, body)
   - Specify response schema and status codes
   - Plan error responses and edge cases

3. Implement endpoint:

   **Spring Boot (Java):**
   ```java
   @RestController
   @RequestMapping("/api/v1")
   public class Controller {
       @PostMapping("/resource")
       public ResponseEntity<Response> create(@Valid @RequestBody Request req) {
           // Implementation
       }
   }
   ```

   **ConnectRPC (Go):**
   ```go
   func (s *Server) Method(ctx context.Context,
       req *connect.Request[pb.Request]) (*connect.Response[pb.Response], error) {
       // Implementation
   }
   ```

   **Axum (Rust):**
   ```rust
   async fn handler(
       State(state): State<AppState>,
       Json(payload): Json<Request>,
   ) -> Result<Json<Response>, StatusCode> {
       // Implementation
   }
   ```

   - Add input validation and sanitization
   - Implement business logic with proper separation
   - Add comprehensive error handling
   - Include structured logging
   - Implement rate limiting if needed

4. Security implementation:
   - Add authentication checks
   - Implement authorization/permission checks
   - Validate and sanitize all inputs
   - Prevent injection attacks
   - Add CORS configuration if needed
   - Implement request signing if required

5. Generate tests:

   **Java (JUnit/MockMvc):**
   ```java
   @Test
   void testEndpoint() throws Exception {
       mockMvc.perform(post("/api/v1/resource")
           .contentType(MediaType.APPLICATION_JSON)
           .content(jsonRequest))
           .andExpect(status().isOk());
   }
   ```

   **Go (testing package):**
   ```go
   func TestEndpoint(t *testing.T) {
       req := httptest.NewRequest("POST", "/api/v1/resource", body)
       w := httptest.NewRecorder()
       handler(w, req)
       assert.Equal(t, http.StatusOK, w.Code)
   }
   ```

   **Rust (axum-test):**
   ```rust
   #[tokio::test]
   async fn test_endpoint() {
       let app = create_app();
       let response = app.oneshot(request).await.unwrap();
       assert_eq!(response.status(), StatusCode::OK);
   }
   ```

   - Test all response codes (200, 400, 401, 403, 404, 500)
   - Test edge cases and invalid inputs
   - Load testing with k6 or Gatling
   - Security tests (auth bypass, injection)

6. Create documentation:
   - OpenAPI/Swagger specification
   - Request/response examples
   - Error code documentation
   - Rate limiting information
   - Authentication requirements
   - Curl/HTTPie examples

7. Database/Service integration:
   - **Java**: JPA/Hibernate, JOOQ, MyBatis
   - **Go**: sqlx, GORM, Ent
   - **Rust**: sqlx, Diesel, SeaORM
   - Implement repository pattern
   - Add database migrations (Flyway, migrate, sqlx)
   - Configure connection pooling
   - Add caching (Redis/DragonflyDB)
   - Consider event sourcing with Kafka/RedPanda

Output:

- Complete endpoint implementation
- Comprehensive test suite
- API documentation
- Database migrations (if needed)
- Example client code
